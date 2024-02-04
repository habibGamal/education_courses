<?php

namespace Tests\Feature;

use App\Enums\PaymentStatus;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Course;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UserOrderTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
        $this->actingAs($this->user);
    }

    public function test_place_order()
    {
        $cart = Cart::factory()->create(['user_id' => $this->user->id]);
        $course = Course::factory()->create();
        CartItem::factory()->create(['cart_id' => $cart->id, 'course_id' => $course->id]);
        Storage::fake('payments');
        $screenshot = UploadedFile::fake()->image('screenshot.jpg');
        $response = $this->post('/orders/place-order', [
            'payment_method' => 'vodafone_cash',
            'phone_number' => '0123456789',
            'screenshot' => $screenshot,
        ]);
        $response->assertRedirect(route('orders.show', ['orderId' => 1]));
        $this->assertDatabaseHas('orders', ['user_id' => $this->user->id]);
        $this->assertDatabaseHas('order_items', ['course_id' => $course->id]);
        $this->assertDatabaseCount('cart_items', 0);
        $this->assertDatabaseHas('payments', [
            'payment_method' => 'vodafone_cash',
            'phone_number' => '0123456789',
            'screenshot' => 'payments/' . $screenshot->hashName(),
        ]);
    }

    public function test_index()
    {
        $payment = Payment::factory()->create(['payment_status' => PaymentStatus::Pending]);
        $order = Order::factory()->create(['user_id' => $this->user->id, 'payment_id' => $payment->id]);
        $response = $this->get('/orders');

        $response->assertInertia(
            fn ($page) => $page->component('Orders/Index')
                ->has('orders')
                ->where('orders.0.id', $order->id)
                ->where('orders.0.payment.payment_status', 'pending')
                ->etc()
        );
    }

    public function test_show()
    {
        $order = Order::factory()->create(['user_id' => $this->user->id]);
        $course = Course::factory()->create();
        OrderItem::factory()->create(['order_id' => $order->id, 'course_id' => $course->id]);

        $response = $this->get('/orders/' . $order->id);

        $response->assertInertia(fn ($page) => $page->component('Orders/Show')
            ->where('order.id', $order->id)
            ->where('order.order_items.0.course_id', $course->id));
    }
}
