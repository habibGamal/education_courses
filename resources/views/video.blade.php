<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <!-- Styles -->

    {{-- <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"> --}}
    <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet">
</head>

<body class="antialiased">
    {{-- <div
        class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"> --}}


        {{-- <div class="max-w-6xl w-full mx-auto sm:px-6 lg:px-8"> --}}
            <video-js id="my_video_1" class="vjs-default-skin vjs-big-play-centered" controls preload="auto"
                data-setup='{"fluid": true}'>
                <source src="/storage/videos/v1/redfield.m3u8" type="application/x-mpegURL">
            </video-js>

            <script src="https://unpkg.com/video.js/dist/video.js"></script>
            <script src="https://unpkg.com/@videojs/http-streaming/dist/videojs-http-streaming.js"></script>

            <script>
                var player = videojs('my_video_1');
            </script>
        {{-- </div> --}}
    {{-- </div> --}}
</body>

</html>
