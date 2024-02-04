<?php

namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Database\Eloquent\Builder;

class AdminOrderController extends Controller
{

    public function acceptPayment(Order $order)
    {
        $order->payment->update([
            'payment_status' => PaymentStatus::Paid,
        ]);

        $user = $order->load('user')->user;

        $order->load('orderItems.course');

        $user->enrolledCourses()->createMany(
            $order->orderItems->map(function ($orderItem) {
                return [
                    'course_id' => $orderItem->course_id,
                ];
            })->toArray()
        );

        // TODO: send email to user

        return redirect()->back();
    }

    public function index()
    {
        $orders = Order::with(['user','payment'])->get();

        return inertia()->render('Admin/Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function pendingOrders()
    {
        $orders = Order::with(['user','payment'])->whereHas('payment', function (Builder $query) {
            $query->where('payment_status', PaymentStatus::Pending);
        })->get();

        return inertia()->render('Admin/Orders/Pending', [
            'orders' => $orders,
        ]);
    }

    public function show(Order $order)
    {
        $order->load('orderItems.course');

        return inertia()->render('Admin/Orders/Show', [
            'order' => $order,
        ]);
    }
}
