<?php

namespace Tests\Feature;

use App\Enums\UserRole;
use App\Models\Block;
use App\Models\Resource;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;

class ResourceTest extends TestCase
{
    use RefreshDatabase;

    // signin as admin before running the tests
    public function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->create(['role' => UserRole::Admin]);
        $this->actingAs($user);
    }

    public function test_store()
    {
        $block = Block::factory()->create();
        $resource = Resource::factory()->make(['block_id' => $block->id]);
        $response = $this->post(route('resources.store'), $resource->toArray());
        $response->assertRedirect(URL::previous());
        $this->assertDatabaseHas('resources', ['title' => $resource->title]);
    }

    public function test_edit()
    {
        $resource = Resource::factory()->create();
        $response = $this->get(route('resources.edit', $resource));
        $response->assertInertia(
            fn ($assert) => $assert
                ->component('Admin/Resources/Edit')
                ->where('resource.id', $resource->id)
                ->where('resource.title', $resource->title)
                ->etc()
        );
    }

    public function test_update()
    {
        $resource = Resource::factory()->create();
        $updatedResource = Resource::factory()->make();
        $response = $this->put(route('resources.update', $resource), $updatedResource->toArray());
        $response->assertRedirect(URL::previous());
        $this->assertDatabaseHas('resources', ['title' => $updatedResource->title]);
    }

    public function test_destroy()
    {
        $resource = Resource::factory()->create();
        $response = $this->delete(route('resources.destroy', $resource));
        $response->assertRedirect(URL::previous());
        $this->assertDatabaseMissing('resources', ['id' => $resource->id]);
    }
}
