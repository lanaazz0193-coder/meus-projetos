<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    /** @use HasFactory<\Database\Factories\LivroFactory> */
    use HasFactory;

    protected $table = 'livros';

    protected $fillable = ['titulo', 'genero', 'autor', 'editora', 'data_lancamento'];

    protected $casts = [
        'data_lancamento' =>  'date',
    ];
}

