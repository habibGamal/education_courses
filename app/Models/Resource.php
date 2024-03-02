<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'block_id',
        'type',
        'video_url',
        'file_url',
        'sort_order',
    ];

    /**
     * Get the block that owns the resource.
     */
    public function block()
    {
        return $this->belongsTo(Block::class);
    }
}
