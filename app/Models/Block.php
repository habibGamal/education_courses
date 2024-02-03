<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'course_id',
        'sort_order',
    ];

    /**
     * Get the course that owns the block.
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * Get the resources for the block.
     */
    public function resources()
    {
        return $this->hasMany(Resource::class);
    }
}
