<?php

namespace App\Http\Middleware;

use App\Models\Resource;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class AccessResource
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // get videoName from $request
        $videoName = "videos/" . $request->route('videoName');
        // ensure that the user enrolled the course that the resource belongs to
        $user = auth()->user();

        // check cache if the user has access to the video
        $canAccess = Cache::get("$user->id,$videoName");
        if ($canAccess) {
            return $next($request);
        }

        $resources = Resource::with('block')->where('video_url', $videoName)->get();
        $canAccess = $user->enrolledCourses()->whereHas('course', function ($query) use ($resources) {
            $query->whereIn('id', $resources->pluck('block.course_id'));
        })->exists();

        if (!$canAccess) {
            abort(403);
        }

        Cache::put("$user->id,$videoName", true, now()->addMinutes(10));
        return $next($request);
    }
}
