<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('thumbnail');
            $table->string('created_by');
            $table->integer('total_enrolled');
            $table->text('description');
            $table->string('duration');
            $table->longText('what_will_learn');
            $table->longText('requirements');
            $table->string('level');
            $table->double('price');
            $table->double('discount_price');
            $table->string('promo_video_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
