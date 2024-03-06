<?php

use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\BlockController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserOrderController;
use App\Models\Course;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EnrolledCourseController;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    $courses = Course::latest()->limit(6)->get();
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'courses' => $courses,
    ]);
})->name('home');

Route::name('browse.')->group(function () {
    Route::get('/courses/{course}', function (Course $course) {
        $course->load('blocks.resources:id,block_id,title');
        return Inertia::render('Courses/Show', [
            'course' => $course,
        ]);
    })->name('courses.show');

    Route::get('/courses', function () {
        $courses = Course::all();
        return Inertia::render('Courses/Index', [
            'courses' => $courses,
        ]);
    })->name('courses.index');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'admin', 'verified'])->name('dashboard');

Route::get('/videos/{url}', function ($url) {
    return view('video', ['url' => $url]);
})->name('videos');

Route::get('/storage/videos/{videoName}/{key}', function ($videoName, $key) {
    return Storage::disk('secure')->download("{$videoName}/{$key}");
})->middleware(['auth','accessResource'])->name('videos.key');


Route::any('/tiny-file-manager', function () {
    return view('tinyfilemanager');
})->middleware(['auth','admin'])->name('tiny-file-manager');

Route::middleware('auth')->group(function () {
    Route::get('/user-dashboard', function () {
        return Inertia::render('UserDashboard');
    })->name('user-dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // cart routes
    Route::get('/cart', [CartController::class, 'show'])->name('cart.show');
    Route::post('/cart/add-item', [CartController::class, 'addCartItem'])->name('cart.addCartItem');
    Route::post('/cart/remove-item', [CartController::class, 'removeCartItem'])->name('cart.removeCartItem');
    Route::post('/cart/clear', [CartController::class, 'clearCart'])->name('cart.clear');
    Route::get('/cart/checkout', [CartController::class, 'checkout'])->name('cart.checkout');
    // orders routes
    Route::get('/orders', [UserOrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/{orderId}', [UserOrderController::class, 'show'])->name('orders.show');
    Route::post('/orders/place-order', [UserOrderController::class, 'placeOrder'])->name('orders.placeOrder');
    // enrolled courses
    Route::get('/enrolled-courses', [EnrolledCourseController::class, 'index'])->name('enrolled-courses.index');
    Route::get('/enrolled-courses/{enrolledCourse}', [EnrolledCourseController::class, 'show'])->name('enrolled-courses.show');
});

// Admin Routes

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/file-manager', function () {
        return view('file-manager');
    })->name('file-manager');
    Route::prefix('admin')->group(function () {
        Route::resource('courses', CourseController::class);
        Route::post('courses/update-blocks-order', [CourseController::class, 'updateBlocksOrder'])->name('courses.updateBlocksOrder');
        Route::resource('blocks', BlockController::class)->except(['index', 'create', 'show']);
        Route::post('blocks/update-resources-order', [BlockController::class, 'updateResourcesOrder'])->name('blocks.updateResourcesOrder');
        Route::resource('resources', ResourceController::class)->except(['index', 'create', 'show']);
        // orders routes
        Route::name('admin.')->group(function () {
            Route::get('/students', [StudentController::class, 'index'])->name('students.index');
            Route::get('/students/{user}', [StudentController::class, 'show'])->name('students.show');
            Route::post('/students/{user}/block-from-course/{course}', [StudentController::class, 'blockUserFromCourse'])->name('students.blockFromCourse');
            Route::get('/orders', [AdminOrderController::class, 'index'])->name('orders.index');
            Route::get('/orders/search', [AdminOrderController::class, 'search'])->name('orders.search');
            Route::get('/orders/{order}', [AdminOrderController::class, 'show'])->name('orders.show');
            Route::post('/orders/{order}/accept-payment', [AdminOrderController::class, 'acceptPayment'])->name('orders.acceptPayment');
            Route::post('/orders/{order}/reject-payment', [AdminOrderController::class, 'rejectPayment'])->name('orders.rejectPayment');
        });
    });
});


require __DIR__ . '/auth.php';
