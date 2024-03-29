<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function checkout()
    {
        $user = auth()->user()->load('cart.cartItems.course');

        return inertia()->render('Cart/Checkout', [
            'cart' => $user->cart,
        ]);
    }

    public function addCartItem(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);

        $courseId = $request->input('course_id');

        $user = auth()->user()->load('cart.cartItems');
        // if the course is already in the cart then redirect back with error
        if ($user->cart->cartItems->contains('course_id', $courseId)) {
            return redirect()->back()->with('error', ['Course already in cart', 'الدورة موجودة بالفعل في السلة']);
        }
        // if user already enrolled in the course then redirect him back with error
        if ($user->enrolledCourses()->where('course_id', $courseId)->exists()) {
            return redirect()->back()->with('error', ['You are already enrolled', 'انت تملك هذه الدورة بالفعل']);
        }

        $user->cart->cartItems()->create([
            'course_id' => $courseId,
        ]);

        return redirect()->route('cart.show')->with('success', ['Course added to cart', 'تمت إضافة الدورة إلى السلة']);
    }


    public function removeCartItem(Request $request)
    {
        $request->validate([
            'cart_item_id' => 'required|exists:cart_items,id',
        ]);

        $cartItemId = $request->input('cart_item_id');

        $user = auth()->user()->load('cart');

        $user->cart->cartItems()->where('id', $cartItemId)->delete();

        return redirect()->back();
    }

    public function show()
    {
        $user = auth()->user()->load('cart.cartItems.course');

        return inertia()->render('Cart/Show', [
            'cart' => $user->cart,
        ]);
    }

    public function clearCart()
    {
        $user = auth()->user()->load('cart');

        $user->cart->cartItems()->delete();

        return redirect()->back();
    }
}
