<?php

use App\Http\Controllers\BlockController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResourceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin Routes

Route::middleware(['auth', 'admin'])->group(function () {
    Route::resource('courses', CourseController::class);
    Route::post('courses/update-blocks-order', [CourseController::class, 'updateBlocksOrder'])->name('courses.updateBlocksOrder');
    Route::resource('blocks', BlockController::class)->except(['index', 'create', 'show']);
    Route::post('blocks/update-resources-order', [BlockController::class, 'updateResourcesOrder'])->name('blocks.updateResourcesOrder');
    Route::resource('resources', ResourceController::class)->except(['index', 'create', 'show']);
});


require __DIR__ . '/auth.php';
