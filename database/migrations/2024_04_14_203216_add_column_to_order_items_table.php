<?php

use App\Enums\ItemType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            // alter column course_id to item_id
            $table->bigInteger('item_id');
            // add column item_type
            $table->string('item_type');
        });
        DB::table('order_items')->update(['item_type' => ItemType::Course->value]);
        // copy data from course_id to item_id
        DB::statement('UPDATE order_items SET item_id = course_id');
        // drop column course_id
        Schema::table('order_items', function (Blueprint $table) {
            // drop foreign key
            $table->dropForeign(['course_id']);
            $table->dropColumn('course_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            // add column course_id
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
        });
        // copy data from item_id to course_id only for course items
        DB::statement('UPDATE order_items SET course_id = item_id WHERE item_type = ' . ItemType::Course->value);
        // delete other items
        DB::statement('DELETE FROM order_items WHERE item_type != ' . ItemType::Course->value);
        // drop column item_id and item_type
        Schema::table('order_items', function (Blueprint $table) {
            $table->dropColumn('item_id');
            $table->dropColumn('item_type');
        });
    }
};
