<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    /**
     * Get the cart items for the cart.
     */
    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    // total attribute
    public function getTotalAttribute()
    {
        return $this->cartItems->sum('item.price');
    }


    public function getRequiredTotalAttribute()
    {
        return $this->cartItems->sum('item.discount_price');
    }
}
