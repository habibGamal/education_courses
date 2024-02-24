<?php

use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\BlockController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\UserOrderController;
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
});

// Admin Routes

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/file-manager',function(){
        return view('demo');
    });
    Route::prefix('admin')->group(function () {
        Route::resource('courses', CourseController::class);
        Route::post('courses/update-blocks-order', [CourseController::class, 'updateBlocksOrder'])->name('courses.updateBlocksOrder');
        Route::resource('blocks', BlockController::class)->except(['index', 'create', 'show']);
        Route::post('blocks/update-resources-order', [BlockController::class, 'updateResourcesOrder'])->name('blocks.updateResourcesOrder');
        Route::resource('resources', ResourceController::class)->except(['index', 'create', 'show']);
        // orders routes
        Route::name('admin.')->group(function () {
            Route::get('/orders', [AdminOrderController::class, 'index'])->name('orders.index');
            Route::get('/orders/pending', [AdminOrderController::class, 'pendingOrders'])->name('orders.pending');
            Route::get('/orders/{order}', [AdminOrderController::class, 'show'])->name('orders.show');
            Route::post('/orders/{order}/accept-payment', [AdminOrderController::class, 'acceptPayment'])->name('orders.acceptPayment');
        });
    });
});


require __DIR__ . '/auth.php';
