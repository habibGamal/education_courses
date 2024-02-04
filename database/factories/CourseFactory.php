<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'thumbnail' => $this->faker->imageUrl(),
            'created_by' => $this->faker->name,
            'total_enrolled' => 0,
            'description' => $this->faker->paragraph,
            'duration' => 0,
            'what_will_learn' => $this->faker->paragraph,
            'requirements' => $this->faker->paragraph,
            'level' => $this->faker->randomElement(['Beginner', 'Intermediate', 'Advanced']),
            'price' => $this->faker->randomFloat(2, 0, 100),
            'discount_price' => $this->faker->randomFloat(2, 0, 100),
            'promo_video_link' => $this->faker->url,
        ];
    }
}
