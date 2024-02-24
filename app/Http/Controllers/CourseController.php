<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Block;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return inertia()->render('Admin/Courses/Index', [
            'courses' => Course::orderBy('id', 'desc')->get(),
        ]);
    }

    public function create()
    {
        return inertia()->render('Admin/Courses/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'created_by' => 'required|max:255',
            'description' => 'required|string',
            'what_will_learn' => 'required|string',
            'requirements' => 'required|string',
            'level' => 'required',
            'price' => 'required',
            'discount_price' => 'required',
        ]);

        Course::create([
            'title' => $request->title,
            'thumbnail' => $request->thumbnail->store('public/thumbnails'),
            'created_by' => $request->created_by,
            'total_enrolled' => 0,
            'description' => $request->description,
            'duration' => 0,
            'what_will_learn' => $request->what_will_learn,
            'requirements' => $request->requirements,
            'level' => $request->level,
            'price' => $request->price,
            'discount_price' => $request->discount_price,
            'promo_video_link' => $request->promo_video_link,
        ]);

        return redirect()->route('courses.index')->with('success', ['Course created successfully', 'تم إنشاء الكورس بنجاح']);
    }

    public function edit(Course $course)
    {
        $course->load(['blocks' => function ($query) {
            $query->orderBy('sort_order', 'desc');
        }]);
        return inertia()->render('Admin/Courses/Edit', [
            'course' => $course,
        ]);
    }

    public function update(Request $request, Course $course)
    {
        $request->validate([
            'title' => 'required|max:255',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'created_by' => 'required|max:255',
            'description' => 'required',
            'what_will_learn' => 'required',
            'requirements' => 'required',
            'level' => 'required',
            'price' => 'required',
            'discount_price' => 'required',
        ]);

        $course->update([
            'title' => $request->title,
            'thumbnail' => $request->thumbnail ? $request->thumbnail->store('thumbnails') : $course->thumbnail,
            'created_by' => $request->created_by,
            'description' => $request->description,
            'what_will_learn' => $request->what_will_learn,
            'requirements' => $request->requirements,
            'level' => $request->level,
            'price' => $request->price,
            'discount_price' => $request->discount_price,
            'promo_video_link' => $request->promo_video_link,
        ]);

        return redirect()->route('courses.index');
    }

    public function updateBlocksOrder(Request $request, Course $course)
    {
        // validate the structure of the blocks
        $request->validate([
            'blocks' => 'required|array',
            'blocks.*.id' => 'required|exists:blocks,id',
            'blocks.*.sort_order' => 'required|integer',
        ]);

        $blocks = $request->blocks;

        foreach ($blocks as $block) {
            Block::where('id', $block['id'])->update(['sort_order' => $block['sort_order']]);
        }

        return redirect()->back();
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return redirect()->route('courses.index')->with('success', ['Course deleted successfully', 'تم حذف الكورس بنجاح']);
    }
}
