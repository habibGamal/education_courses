<?php

namespace App\Http\Controllers;

use App\Enums\ItemType;
use App\Http\Controllers\Controller;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function checkout()
    {
        $user = auth()->user()->load('cart.cartItems.item');
        // $items = $user->cart->cartItems;
        // CartItem::loadPackages($items);

        return inertia()->render('Cart/Checkout', [
            'cart' => $user->cart,
        ]);
    }

    public function addCartItem(Request $request)
    {
        // validate item_id either course_id or package_id
        $request->validate([
            'item_id' => 'required|integer',
            'item_type' => ['required', 'string', 'in:' . ItemType::Course->value . ',' . ItemType::Package->value]
        ]);

        $itemId = $request->input('item_id');
        $itemType = $request->input('item_type');

        $user = auth()->user()->load('cart.cartItems');
        // if the course is already in the cart then redirect back with error
        $itemInCart = $user->cart->cartItems->contains('item_id', $itemId) && $user->cart->cartItems->contains('item_type', $itemType);
        if ($itemInCart) {
            return redirect()->back()->with('error', ['Course already in cart', 'الدورة موجودة بالفعل في السلة']);
        }

        $user->cart->cartItems()->create([
            'item_id' => $itemId,
            'item_type' => $request->input('item_type'),
        ]);

        return redirect()->route('cart.show')->with('success', ['Course added to cart', 'تمت إضافة الدورة إلى السلة']);
    }


    public function removeCartItem(Request $request)
    {
        $request->validate([
            'cart_item_id' => 'required|exists:cart_items,id',
        ]);

        $cartItemId = $request->input('cart_item_id');

        $user = auth()->user()->load('cart');

        $user->cart->cartItems()->where('id', $cartItemId)->delete();

        return redirect()->back();
    }

    public function show()
    {
        $user = auth()->user()->load('cart.cartItems.item');

        return inertia()->render('Cart/Show', [
            'cart' => $user->cart,
        ]);
    }

    public function clearCart()
    {
        $user = auth()->user()->load('cart');

        $user->cart->cartItems()->delete();

        return redirect()->back();
    }
}
