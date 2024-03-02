<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'payment_status' => 'pending',
            'payment_method' => 'paypal',
            'payment_amount' => 100,
            'total'=>500,
            'required_amount'=>100,
            'phone_number' => '0123456789',
            'screenshot' => $this->faker->imageUrl(),
        ];
    }
}
