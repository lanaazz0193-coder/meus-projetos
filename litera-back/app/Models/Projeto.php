<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    /** @use HasFactory<\Database\Factories\ProjetoFactory> */
    use HasFactory;

    protected $table = 'projetos';

    protected $fillable = ['titulo', 'descricao', 'imagem', 'link', 'tecnologias'];

}
