<?php

namespace Tests\Feature;

use App\Enums\UserRole;
use App\Models\Block;
use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;

class CousreTest extends TestCase
{
    use RefreshDatabase;

    // signin as admin before running the tests
    public function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->create(['role' => UserRole::Admin]);
        $this->actingAs($user);
    }

    public function test_index()
    {
        Course::factory()->count(3)->create();

        $response = $this->get('/courses');

        $response->assertInertia(
            fn ($assert) => $assert
                ->component('Admin/Courses/Index')
                ->has('courses', 3)
        );
    }

    public function test_update_blocks_order()
    {
        $blocks = Block::factory()->count(3)->create();

        $blocksData = $blocks->map(function ($block, $index) {
            return ['id' => $block->id, 'sort_order' => $index + 1];
        })->toArray();

        $response = $this->post(route('courses.updateBlocksOrder'), ['blocks' => $blocksData]);

        $response->assertRedirect(URL::previous());

        foreach ($blocksData as $blockData) {
            $this->assertDatabaseHas('blocks', [
                'id' => $blockData['id'],
                'sort_order' => $blockData['sort_order']
            ]);
        }
    }

    public function test_create()
    {
        $response = $this->get('/courses/create');

        $response->assertInertia(
            fn ($assert) => $assert
                ->component('Admin/Courses/Create')
        );
    }

    public function teset_edit()
    {
        $course = Course::factory()->create();

        $response = $this->get("/courses/{$course->id}/edit");

        $response->assertInertia(
            fn ($assert) => $assert
                ->component('Admin/Courses/Edit')
                ->has(
                    'course',
                    fn ($assert) => $assert
                        ->where('id', $course->id)
                        ->where('title', $course->title)
                        ->where('thumbnail', $course->thumbnail)
                        ->where('created_by', $course->created_by)
                        ->where('description', $course->description)
                        ->where('what_will_learn', $course->what_will_learn)
                        ->where('requirements', $course->requirements)
                        ->where('level', $course->level)
                        ->where('price', $course->price)
                        ->where('discount_price', $course->discount_price)
                        ->where('promo_video_link', $course->promo_video_link)
                        ->etc()
                )
        );
    }

    public function test_update()
    {
        Storage::fake('thumbnails');
        $course = Course::factory()->create();
        $thumbnail = UploadedFile::fake()->image('thumbnail.jpg');
        $courseData = [
            'title' => 'Updated Course',
            'thumbnail' => $thumbnail,
            'created_by' => "Updated Author",
            'description' => 'Updated Description',
            'what_will_learn' => 'Updated Learning',
            'requirements' => 'Updated Requirements',
            'level' => 'Intermediate',
            'price' => 100,
            'discount_price' => 50,
            'promo_video_link' => 'updated.mp4',
        ];

        $response = $this->put("/courses/{$course->id}", $courseData);

        $response->assertRedirect(route('courses.index'));
        $this->assertDatabaseHas('courses', [
            'title' => 'Updated Course',
            'thumbnail' => 'thumbnails/' . $thumbnail->hashName(),
            'created_by' => "Updated Author",
            'description' => 'Updated Description',
            'what_will_learn' => 'Updated Learning',
            'requirements' => 'Updated Requirements',
            'level' => 'Intermediate',
            'price' => 100,
            'discount_price' => 50,
            'promo_video_link' => 'updated.mp4',
        ]);
    }

    public function test_store()
    {
        Storage::fake('thumbnails');
        $thumbnail = UploadedFile::fake()->image('thumbnail.jpg');
        $courseData = [
            'title' => 'Test Course',
            'thumbnail' => $thumbnail,
            'created_by' => "Test Author",
            'description' => 'Test Description',
            'what_will_learn' => 'Test Learning',
            'requirements' => 'Test Requirements',
            'level' => 'Beginner',
            'price' => 50,
            'discount_price' => 25,
            'promo_video_link' => 'test.mp4',
        ];

        $response = $this->post('/courses', $courseData);
        $response->assertRedirect(route('courses.index'));
        $this->assertDatabaseHas('courses', [
            'title' => 'Test Course',
            'thumbnail' => 'thumbnails/' . $thumbnail->hashName(),
            'created_by' => "Test Author",
            'description' => 'Test Description',
            'what_will_learn' => 'Test Learning',
            'requirements' => 'Test Requirements',
            'level' => 'Beginner',
            'price' => 50,
            'discount_price' => 25,
            'promo_video_link' => 'test.mp4',
        ]);
    }

    public function test_destroy()
    {
        $course = Course::factory()->create();

        $response = $this->delete("/courses/{$course->id}");

        $response->assertRedirect(route('courses.index'));
        $this->assertDatabaseMissing('courses', ['id' => $course->id]);
    }
}
