<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\UserRole;
use App\Models\Block;
use App\Models\Coupon;
use App\Models\Course;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
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
        User::factory()->create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'email_verified_at' => now(),
            'password' =>  Hash::make('password'),
            'remember_token' => Str::random(10),
            'role' => UserRole::User,
            'country' => '_',
            'city' => '__',
            'phone' => '1234567890',
        ]);

        Course::factory(2)->create();
        Block::factory(2)->create([
            'course_id' => Course::all()->random()->id,
        ]);
        Resource::factory(2)->create([
            'block_id' => Block::all()->random()->id,
        ]);

        // fake Order
        $orders = Order::factory(1)->create();
        OrderItem::factory(2)->create([
            'order_id' => Order::all()->random()->id,
        ]);

        // fake coupon
        Coupon::factory(1)->create([
            'type' => 'fixed',
            'value' => 50
        ]);

        // fake Payment
        $payments = Payment::factory(1)->create([
            'total' => OrderItem::all()->reduce(fn ($carry, $item) => $carry + $item->price, 0),
            'coupon_id' =>  Coupon::all()->random()->id,
            'required_amount' => OrderItem::all()->reduce(fn ($carry, $item) => $carry + $item->price, 0) - Coupon::all()->random()->value,
        ]);
        $orders[0]->payment_id = $payments[0]->id;
        $orders[0]->save();
    }
}
