<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $email = request('email') ?? '';
        $students = User::where('role', UserRole::User->value)->where('email', 'like', "%$email%")->paginate();
        return inertia()->render('Admin/Students/Index', [
            'students' => $students
        ]);
    }

    public function show(User $user)
    {
        $user->load('enrolledCourses.course:id,title');
        $courses = Course::all();

        return inertia()->render('Admin/Students/Show', [
            'student' => $user,
            'courses' => $courses
        ]);
    }

    public function blockUserFromCourse(User $user, $courseId)
    {
        $user->enrolledCourses()->where('course_id', $courseId)->delete();
        return redirect()->back()->with('success', ['User blocked from course', 'تم حظر المستخدم من الدورة']);
    }

    public function addUserToCourse(User $user, Request $request)
    {
        $request->validate([
            'courses' => 'required|array',
        ]);
        $user->load('enrolledCourses');
        // filter out courses that the user is already enrolled in
        $courses = $user->enrolledCourses->pluck('course_id')->toArray();
        $courses = array_diff($request->courses, $courses);
        $user->enrolledCourses()->createMany(
            collect($courses)->map(function ($courseId) {
                return ['course_id' => $courseId];
            })->toArray()
        );

        return redirect()->back()->with('success', ['Saved', 'تم الحفظ']);
    }

    public function createStudent()
    {
        return inertia()->render('Admin/Students/Create');
    }
}
