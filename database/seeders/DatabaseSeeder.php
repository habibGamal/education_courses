<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\UserRole;
use App\Models\Block;
use App\Models\Course;
use App\Models\Resource;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Kero',
            'email' => 'habibmisi3@gmail.com',
            'email_verified_at' => now(),
            'password' =>  Hash::make('password'),
            'remember_token' => Str::random(10),
            'role' => UserRole::Admin,
            'country' => '_',
            'city' => '__',
            'phone' => '1234567890',
        ]);

        Course::factory(10)->create();
        Block::factory(10)->create([
            'course_id' => Course::all()->random()->id,
        ]);
        Resource::factory(10)->create([
            'block_id' => Block::all()->random()->id,
        ]);

    }
}
