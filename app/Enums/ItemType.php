<?php

namespace App\Enums;

enum ItemType: string {
    case Course = 'App\Models\Course';
    case Package = 'App\Models\Package';
}
