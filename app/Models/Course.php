<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

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
    public function orderItems(): MorphMany
    {
        return $this->morphMany(OrderItem::class, 'item');
    }

    /**
     * Get the cart items for the course.
     */
    public function cartItems(): MorphMany
    {
        return $this->morphMany(CartItem::class, 'item');
    }

    /**
     * Get the blocks for the course.
     */
    public function blocks()
    {
        return $this->hasMany(Block::class);
    }

    /**
     * Get the packages for the course.
     */
    public function packages()
    {
        return $this->belongsToMany(Package::class);
    }
}
