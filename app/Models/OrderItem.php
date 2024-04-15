<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class OrderItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_id',
        'item_id',
        'item_type',
        'price',
    ];

    /**
     * Get the order that the order item belongs to.
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the course that the order item belongs to.
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function item(): MorphTo
    {
        return $this->morphTo();
    }
}
