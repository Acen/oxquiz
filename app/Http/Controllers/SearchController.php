<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TomLingham\Searchy\Facades\Searchy;

class SearchController extends Controller
{
    public function questions(Request $request)
    {
        $this->validate($request, [
            'question' => 'required|string'
        ]);
        $question_simplified = str_slug($request->input('question'));
        return Searchy::search('questions')->fields('cleaned')->query($question_simplified)->get();
    }

}