<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EnrolledCourseController extends Controller
{
    public function index()
    {
        $user = auth()->user()->load('enrolledCourses.course');
        return inertia()->render('Student/EnrolledCourses/Index', [
            'enrolledCourses' => $user->enrolledCourses,
        ]);
    }

    public function show($id)
    {
        $enrolledCourse = auth()->user()->enrolledCourses()->findOrFail($id);
        $enrolledCourse->load('course.blocks.resources:id,block_id,title,type,video_url,file_url,sort_order');
        // replace value of video_url with encrypted value
        $enrolledCourse->course->blocks->each(function ($block) {
            $block->resources->each(function ($resource) {
                $resource->video_url = $resource->video_url_encrypted;
            });
        });

        return inertia()->render('Student/EnrolledCourses/Show', [
            'enrolledCourse' => $enrolledCourse,
        ]);
    }
}
