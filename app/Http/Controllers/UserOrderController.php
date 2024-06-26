<?php

namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;

class UserOrderController extends Controller
{
    public function placeOrder(Request $request)
    {
        $user = auth()->user()->load('cart.cartItems.item');

        // validate payment details
        $request->validate([
            'payment_method' => 'required|in:vodafone_cash,orange_cash,instapay',
            'phone_number' => 'required|string',
            'screenshot' => 'required|image|max:2048',
        ]);

        // create payment
        $payment = Payment::create([
            'payment_method' => $request->input('payment_method'),
            'payment_status' => PaymentStatus::Pending,
            'payment_amount' => $user->cart->requiredTotal,
            'required_amount' => $user->cart->requiredTotal,
            'total' => $user->cart->total,
            'phone_number' => $request->input('phone_number'),
            'screenshot' => $request->file('screenshot')->store('public/payments'),
        ]);

        // create order
        $order = $user->orders()->create([
            'payment_id' => $payment->id,
        ]);

        // create order items
        foreach ($user->cart->cartItems as $cartItem) {
            $order->orderItems()->create([
                'item_id' => $cartItem->item_id,
                'item_type' => $cartItem->item_type,
                'price' => $cartItem->item->discount_price,
            ]);
        }

        // clear cart
        $user->cart->cartItems()->delete();

        // send email to user
        // TODO: implement sending email to user

        return redirect()->route('orders.show', ['orderId' => $order->id]);
    }

    public function index()
    {
        $user = auth()->user()->load('orders.payment');

        return inertia()->render('Student/Orders/Index', [
            'orders' => $user->orders,
        ]);
    }

    public function show($orderId)
    {
        $user = auth()->user();

        $order = $user->orders()->with(['orderItems.item', 'payment.coupon'])->findOrFail($orderId);

        return inertia()->render('Student/Orders/Show', [
            'order' => $order,
        ]);
    }
}
