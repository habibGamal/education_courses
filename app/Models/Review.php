<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rating',
        'review',
    ];

    /**
     * Get the enrolled course that owns the review.
     */
    public function enrolledCourse()
    {
        return $this->hasOne(EnrolledCourse::class);
    }
}
