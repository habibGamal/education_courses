<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'block_id' => 'required|exists:blocks,id',
        ]);

        $count = Resource::where('block_id', $request->block_id)->count();

        Resource::create([
            'title' => $request->title,
            'block_id' => $request->block_id,
            'sort_order' => $count,
        ]);

        return redirect()->back();
    }

    public function edit(Resource $resource)
    {
        return inertia()->render('Admin/Resources/Edit', [
            'resource' => $resource,
        ]);
    }

    public function update(Request $request, Resource $resource)
    {
        $request->validate([
            'title' => 'required|max:255',
        ]);

        $resource->update($request->all());

        return redirect()->back();
    }

    public function destroy(Resource $resource)
    {
        $resource->delete();

        return redirect()->back();
    }
}
