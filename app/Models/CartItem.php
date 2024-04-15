<?php

namespace App\Models;

use App\Enums\ItemType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CartItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cart_id',
        'item_id',
        'item_type',
    ];

    /**
     * Get the cart that the cart item belongs to.
     */
    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    /**
     * Get the course that the cart item belongs to.
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function item(): MorphTo
    {
        return $this->morphTo();
    }

    static function loadPackages($items) {
        $items->each(function ($item) {
            if ($item->item_type === ItemType::Package->value) {
                $item->item->load('courses');
            }
        });
    }
}
