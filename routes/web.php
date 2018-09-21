<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/register', 'Auth\RegisterController@register')->name('register');

Route::get('/check', function(Illuminate\Http\Request $request){
    dd($request->user());
});
Route::get('/logout', function(Illuminate\Http\Request $request){
    Illuminate\Support\Facades\Auth::logout();
    return Illuminate\Support\Facades\Auth::user();
});
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
