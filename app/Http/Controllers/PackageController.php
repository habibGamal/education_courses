<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    public function index()
    {
        return inertia()->render('Admin/Packages/Index', [
            'pkgs' => Package::orderBy('id', 'desc')->get(),
        ]);
    }

    public function create()
    {
        return inertia()->render('Admin/Packages/Create', [
            'courses' => Course::select('id', 'title')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'thumbnail' => 'required|image|max:2048',
            'description' => 'required|string',
            'price' => 'required',
            'discount_price' => 'required',
            'courses' => 'array|required',
            'courses.*' => 'integer|exists:courses,id',
        ]);

        $package = Package::create([
            'title' => $request->title,
            'thumbnail' => $request->thumbnail->store('public/thumbnails'),
            'description' => $request->description,
            'price' => $request->price,
            'discount_price' => $request->discount_price,
        ]);

        $package->courses()->attach($request->courses);

        return redirect()->route('packages.index')->with('success', ['Package created successfully', 'تم إنشاء الباقة بنجاح']);
    }

    public function edit(Package $package)
    {
        $package->load('courses:id,title');
        return inertia()->render('Admin/Packages/Edit', [
            'pkg' => $package,
            'courses' => Course::select('id', 'title')->get(),
        ]);
    }

    public function update(Request $request, Package $package)
    {
        $request->validate([
            'title' => 'required|max:255',
            'thumbnail' => 'nullable|image|max:2048',
            'description' => 'required|string',
            'price' => 'required',
            'discount_price' => 'required',
            'courses' => 'array|required',
            'courses.*' => 'integer|exists:courses,id',
        ]);

        $package->update([
            'title' => $request->title,
            'thumbnail' => $request->thumbnail ? $request->thumbnail->store('public/thumbnails') : $package->thumbnail,
            'description' => $request->description,
            'price' => $request->price,
            'discount_price' => $request->discount_price,
        ]);

        $package->courses()->sync($request->courses);


        return redirect()->route('packages.index')->with('success', ['Package updated successfully', 'تم تحديث الباقة بنجاح']);
    }

    public function destroy(Package $package)
    {
        $package->delete();
        return redirect()->route('packages.index')->with('success', ['Package deleted successfully', 'تم حذف الباقة بنجاح']);
    }
}
