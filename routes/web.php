<?php

// Auth
Route::post('/register', 'Auth\RegisterController@register')->name('register');
Route::post('/login', 'Auth\LoginController@login')->name('login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/check', function(Illuminate\Http\Request $request){
    dd($request->user());
});

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');