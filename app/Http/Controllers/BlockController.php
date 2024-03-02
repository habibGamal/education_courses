<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Block;
use App\Models\Resource;
use Illuminate\Http\Request;

class BlockController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'course_id' => 'required|exists:courses,id',
        ]);

        $count = Block::where('course_id', $request->course_id)->count();

        Block::create([
            'title' => $request->title,
            'course_id' => $request->course_id,
            'sort_order' => $count,
        ]);

        return redirect()->back()->with('success', ['Block created successfully', 'تم إنشاء البلوك بنجاح']);
    }

    public function edit(Block $block)
    {
        $block->load(['resources' => function ($query) {
            $query->orderBy('sort_order', 'asc');
        }, 'course:id,title']);
        return inertia()->render('Admin/Blocks/Edit', [
            'courseTitle' => $block->course->title,
            'block' => $block,
        ]);
    }

    public function update(Request $request, Block $block)
    {
        $request->validate([
            'title' => 'required|max:255',
        ]);

        $block->update($request->all());

        return redirect()->back()->with('success', ['Block updated successfully', 'تم تحديث البلوك بنجاح']);
    }

    public function updateResourcesOrder(Request $request)
    {
        $request->validate([
            'resources' => 'required|array',
            'resources.*.id' => 'required|exists:resources,id',
            'resources.*.sort_order' => 'required|integer',
        ]);

        $resources = $request->resources;
        foreach ($resources as $resource) {
            Resource::find($resource['id'])->update(['sort_order' => $resource['sort_order']]);
        }

        return redirect()->back()->with('success', ['Resources order updated successfully', 'تم تحديث ترتيب المحتوى بنجاح']);
    }

    public function destroy(Block $block)
    {
        $block->delete();

        return redirect()->back()->with('success', ['Block deleted successfully', 'تم حذف البلوك بنجاح']);
    }
}
