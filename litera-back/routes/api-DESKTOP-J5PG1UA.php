<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LivroController;
use App\Http\Controllers\ProjetoController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('livros', LivroController::class) -> parameters(['livros' => 'livro']);
Route::apiResource('projetos', ProjetoController::class) -> parameters(['projetos' => 'projeto']);
