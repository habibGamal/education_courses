<?php

namespace Tests\Feature;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;

class CartTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    protected $cart;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
        $this->cart = Cart::factory()->create(['user_id' => $this->user->id]);
        $this->actingAs($this->user);
    }

    public function test_checkout()
    {
        $course1 = Course::factory()->create();
        $course2 = Course::factory()->create();
        CartItem::factory()->create(['cart_id' => $this->cart->id, 'course_id' => $course1->id]);
        CartItem::factory()->create(['cart_id' => $this->cart->id, 'course_id' => $course2->id]);

        $response = $this->get('/cart/checkout');
        $response->assertInertia(
            fn ($page) =>
            $page->component('Cart/Checkout')
                ->where('cart.id', $this->cart->id)
                ->count('cart.cart_items', 2)
                ->where('cart.cart_items.0.course.id', $course1->id)
                ->where('cart.cart_items.1.course.id', $course2->id)
                ->etc()
        );
    }

    public function test_add_cart_item()
    {
        $course = Course::factory()->create();

        $response = $this->post('/cart/add-item', ['course_id' => $course->id]);

        $response->assertRedirect(URL::previous());
        $this->assertDatabaseHas('cart_items', ['course_id' => $course->id]);
    }

    public function test_remove_cart_item()
    {
        $course = Course::factory()->create();
        $cartItem = CartItem::factory()->create(['cart_id' => $this->cart->id, 'course_id' => $course->id]);

        $response = $this->post('/cart/remove-item', ['cart_item_id' => $cartItem->id]);

        $response->assertRedirect();
        $this->assertDatabaseMissing('cart_items', ['id' => $cartItem->id]);
    }

    public function test_show_cart()
    {
        $course1 = Course::factory()->create();
        $course2 = Course::factory()->create();
        CartItem::factory()->create(['cart_id' => $this->cart->id, 'course_id' => $course1->id]);
        CartItem::factory()->create(['cart_id' => $this->cart->id, 'course_id' => $course2->id]);

        $response = $this->get('/cart');

        $response->assertInertia(
            fn ($page) => $page->component('Cart/Show')
                ->has('cart')
                ->where('cart.id', $this->cart->id)
                ->count('cart.cart_items', 2)
                ->where('cart.cart_items.0.course.id', $course1->id)
                ->where('cart.cart_items.1.course.id', $course2->id)
        );
    }

    public function test_clear_cart()
    {
        CartItem::factory()->count(3)->create(['cart_id' => $this->cart->id]);

        $response = $this->post('/cart/clear');

        $response->assertRedirect(URL::previous());
        $this->assertDatabaseCount('cart_items', 0);
    }
}
