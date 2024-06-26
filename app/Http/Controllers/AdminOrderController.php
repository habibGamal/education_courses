<?php

namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminOrderController extends Controller
{

    public function acceptPayment(Order $order)
    {
        if ($order->payment->payment_status != PaymentStatus::Pending->value) {
            return redirect()->back()->with('error', ['Payment already handled', 'تم التعامل مع عملية الدفع مسبقا']);
        }
        $order->payment->update([
            'payment_status' => PaymentStatus::Paid,
        ]);

        $user = $order->load('user')->user;

        $courses = $order->loadCourses();

        $user->enrolledCourses()->createMany(
            $courses->map(function ($course) {
                return [
                    'course_id' => $course->id,
                ];
            })->toArray()
        );

        Mail::to($user->email)->send(new \App\Mail\CourseAccepted($order, $user));

        return redirect()->back()->with('success', ['Payment accepted', 'تم قبول عملية الدفع']);
    }

    public function rejectPayment(Order $order)
    {

        if ($order->payment->payment_status != PaymentStatus::Pending->value) {
            return redirect()->back()->with('error', ['Payment already handled', 'تم التعامل مع عملية الدفع مسبقا']);
        }
        $order->payment->update([
            'payment_status' => PaymentStatus::Failed,
        ]);

        $user = $order->load('user')->user;

        Mail::to($user->email)->send(new \App\Mail\CourseRejected($order, $user));

        return redirect()->back();
    }

    public function index(Request $request)
    {
        $status = $request->status;

        $orders = $status ?
            Order::with(['user', 'payment'])->whereHas('payment', function ($query) use ($status) {
                $query->where('payment_status', $status);
            })->paginate() :
            Order::with(['user', 'payment'])->paginate();

        return inertia()->render('Admin/Orders/Index', [
            'orders' => $orders,
        ]);
    }
    public function search(Request $request)
    {
        $status = $request->status;
        $email = $request->email ?? '';

        $orders = $status ?
            Order::with(['user', 'payment'])->whereHas('payment', function ($query) use ($status) {
                $query->where('payment_status', $status);
            })->whereHas('user', function ($query) use ($email) {
                $query->where('email', 'LIKE', "%$email%");
            })
            ->paginate() :
            Order::with(['user', 'payment'])->whereHas('user', function ($query) use ($email) {
                $query->where('email', 'LIKE', "%$email%");
            })->paginate();

        return inertia()->render('Admin/Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function show(Order $order)
    {
        $order->load(['orderItems.item', 'user', 'payment.coupon']);

        return inertia()->render('Admin/Orders/Show', [
            'order' => $order,
        ]);
    }
}
