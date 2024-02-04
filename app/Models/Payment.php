<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'payment_method',
        'payment_status',
        'payment_amount',
        'phone_number',
        'screenshot',
    ];

    /**
     * Get the order that owns the payment.
     */
    public function order()
    {
        return $this->hasOne(Order::class);
    }
}
