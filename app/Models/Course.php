<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'thumbnail',
        'created_by',
        'total_enrolled',
        'description',
        'duration',
        'what_will_learn',
        'requirements',
        'level',
        'price',
        'discount_price',
        'promo_video_link',
    ];

    /**
     * Get the enrolled courses for the course.
     */
    public function enrolledCourses()
    {
        return $this->hasMany(EnrolledCourse::class);
    }

    /**
     * Get the order items for the course.
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Get the cart items for the course.
     */
    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    /**
     * Get the blocks for the course.
     */
    public function blocks()
    {
        return $this->hasMany(Block::class);
    }
}
