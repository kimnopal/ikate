<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home-new');
})->name('home');

Route::get('/alumni', function () {
    return Inertia::render('alumni');
})->name('alumni');

Route::get('/berita', function () {
    return Inertia::render('berita');
})->name('berita');

Route::get('/kontak', function () {
    return Inertia::render('kontak');
})->name('kontak');

Route::get('/karir', function () {
    return Inertia::render('karir');
})->name('karir');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
