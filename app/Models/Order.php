<?php

namespace App\Models;

use App\Enums\ItemType;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'payment_id',
    ];

    /**
     * Get the user that owns the order.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the payment that belongs to the order.
     */
    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    /**
     * Get the order items for the order.
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function loadCourses()
    {
        $this->load('orderItems.item');
        $items = $this->orderItems;
        $courses = Collection::make();
        $items->each(function ($orderItem) use (&$courses) {
            if ($orderItem->item_type === ItemType::Course->value) {
                $courses->push($orderItem->item);
            } elseif ($orderItem->item_type === ItemType::Package->value) {
                $orderItem->item->load('courses');
                $courses = $courses->merge($orderItem->item->courses);
            }
        });
        return $courses;
    }
}
