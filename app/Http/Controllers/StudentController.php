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

        return inertia()->render('Admin/Students/Show', [
            'student' => $user,
        ]);
    }

    public function blockUserFromCourse(User $user, $courseId)
    {
        $user->enrolledCourses()->where('course_id', $courseId)->delete();
        return redirect()->back()->with('success', ['User blocked from course', 'تم حظر المستخدم من الدورة']);
    }
}
