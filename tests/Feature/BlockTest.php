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

class BlockTest extends TestCase
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
        $block = Block::factory()->make();
        $response = $this->post(route('blocks.store'), $block->toArray());
        $response->assertRedirect(URL::previous());
        $this->assertDatabaseHas('blocks', ['title' => $block->title]);
    }

    public function test_edit()
    {
        $block = Block::factory()->create();
        $response = $this->get(route('blocks.edit', $block));
        $response->assertInertia(
            fn ($assert) => $assert
                ->component('Admin/Blocks/Edit')
                ->where('block.id', $block->id)
                ->where('block.title', $block->title)
                ->etc()
        );
    }

    public function test_update()
    {
        $block = Block::factory()->create();
        $updatedBlock = Block::factory()->make();
        $response = $this->put(route('blocks.update', $block), $updatedBlock->toArray());
        $response->assertRedirect(URL::previous());
        $this->assertDatabaseHas('blocks', ['title' => $updatedBlock->title]);
    }

    public function test_update_resources_order()
    {
        $resources = Resource::factory()->count(3)->create();

        $resourcesData = $resources->map(function ($resource, $index) {
            return ['id' => $resource->id, 'sort_order' => $index + 1];
        })->toArray();

        $response = $this->post(route('blocks.updateResourcesOrder'), ['resources' => $resourcesData]);

        $response->assertRedirect(URL::previous());

        foreach ($resourcesData as $resourceData) {
            $this->assertDatabaseHas('resources', [
                'id' => $resourceData['id'],
                'sort_order' => $resourceData['sort_order']
            ]);
        }
    }
    public function test_destroy()
    {
        $block = Block::factory()->create();
        $response = $this->delete(route('blocks.destroy', $block));
        $response->assertRedirect(URL::previous());
        $this->assertDatabaseMissing('blocks', ['id' => $block->id]);
    }
}
