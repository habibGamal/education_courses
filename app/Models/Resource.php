<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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

    public function getVideoUrlEncryptedAttribute()
    {
        $public_key = Storage::disk('encrypt')->get('public_key.pem');
        $url = url('/storage');
        openssl_public_encrypt(  "$url/$this->video_url/redfield.m3u8", $encrypted, $public_key);
        $encryptedString = base64_encode($encrypted);
        return $encryptedString;
    }

    /**
     * Get the block that owns the resource.
     */
    public function block()
    {
        return $this->belongsTo(Block::class);
    }
}
