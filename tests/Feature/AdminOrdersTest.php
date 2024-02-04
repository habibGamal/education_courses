<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Enums\PaymentStatus;
use App\Enums\UserRole;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Course;
use App\Models\User;
use Illuminate\Support\Facades\URL;

class AdminOrdersTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;
    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role' => UserRole::Admin]);
        $this->user = User::factory()->create();
        $this->actingAs($this->admin);
    }

    public function test_accept_payment()
    {
        $payment = Payment::factory()->create(['payment_status' => PaymentStatus::Pending]);
        $order = Order::factory()->create(['payment_id' => $payment->id, 'user_id' => $this->user->id]);

        $courses = Course::factory()->count(3)->create();
        $courses->each(function ($course) use ($order) {
            return OrderItem::factory()->create(['order_id' => $order->id, 'course_id' => $course->id]);
        });

        $response = $this->post('/admin/orders/' . $order->id . '/accept-payment');

        $response->assertRedirect(URL::previous());
        $this->assertDatabaseHas('payments', ['id' => $payment->id, 'payment_status' => PaymentStatus::Paid]);

        // Assert that the user is enrolled in the courses
        foreach ($courses as $course) {
            $this->assertDatabaseHas('enrolled_courses', ['user_id' => $this->user->id, 'course_id' => $course->id]);
        }
    }

    public function test_index()
    {
        $order = Order::factory()->create();

        $response = $this->get('/admin/orders');

        $response->assertInertia(fn ($page) => $page->component('Admin/Orders/Index')
            ->where('orders.0.id', $order->id)
            ->has('orders.0.payment')
            ->has('orders.0.user')
        );
    }

    public function test_pending_orders()
    {
        $payment = Payment::factory()->create(['payment_status' => PaymentStatus::Pending]);
        $order = Order::factory()->create(['user_id' => $this->user->id, 'payment_id' => $payment->id]);

        $response = $this->get('/admin/orders/pending');

        $response->assertInertia(
            fn ($page) => $page->component('Admin/Orders/Pending')
                ->where('orders.0.id', $order->id)
                ->where('orders.0.payment.payment_status', 'pending')
                ->has('orders.0.user')
                ->etc()
        );
    }

    public function test_show()
    {
        $order = Order::factory()->create();
        $course = Course::factory()->create();
        OrderItem::factory()->create(['order_id' => $order->id, 'course_id' => $course->id]);

        $response = $this->get('/admin/orders/' . $order->id);

        $response->assertInertia(fn ($page) => $page->component('Admin/Orders/Show')
            ->where('order.id', $order->id)
            ->where('order.order_items.0.course_id', $course->id));
    }
}
