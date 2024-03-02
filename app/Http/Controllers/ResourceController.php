<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Resource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ResourceController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'type' => 'required|in:video,file',
            'block_id' => 'required|exists:blocks,id',
        ]);

        $count = Resource::where('block_id', $request->block_id)->count();

        Resource::create([
            'title' => $request->title,
            'type' => $request->type,
            'block_id' => $request->block_id,
            'sort_order' => $count,
        ]);

        return redirect()->back()->with('success', ['Resource created successfully', 'تم إنشاء المحتوى بنجاح']);
    }

    public function edit(Resource $resource)
    {
        $resource->load('block:id,title,course_id');
        $resource->block->load('course:id,title');
        $targetExtension = 'm3u8';
        $disk = Storage::disk('public');
        $directories =   $disk->directories('videos', true);
        $matchingDirectories = array_filter($directories, function ($directory) use ($targetExtension, $disk) {
            $files = $disk->files($directory);
            foreach ($files as $file) {
                $fileInfo = pathinfo($file);
                if ($fileInfo['extension'] === $targetExtension) {
                    return true;
                }
            }

            return false;
        });
        return inertia()->render('Admin/Resources/Edit', [
            'courseId' => $resource->block->course_id,
            'courseTitle' =>  $resource->block->course->title,
            'blockTitle' =>  $resource->block->title,
            'resource' => $resource,
            'videosDirectories' => array_values($matchingDirectories),
        ]);
    }

    public function update(Request $request, Resource $resource)
    {
        $request->validate([
            'title' => 'required|max:255',
            'type' => 'required|in:video,file',
            'video_url' => 'nullable|string',
            'file_url' => 'nullable|string',
        ]);

        $resource->update($request->all());

        return redirect()->back()->with('success', ['Resource updated successfully', 'تم تحديث المحتوى بنجاح']);
    }

    public function destroy(Resource $resource)
    {
        $resource->delete();

        return redirect()->back()->with('success', ['Resource deleted successfully', 'تم حذف المحتوى بنجاح']);
    }
}
