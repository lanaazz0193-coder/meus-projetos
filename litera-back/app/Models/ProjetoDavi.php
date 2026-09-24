<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjetoDavi extends Model
{
    /** @use HasFactory<\Database\Factories\ProjetoDaviFactory> */
    use HasFactory;

    protected $table = 'projeto_davis'; // COMO ESCREVER O NOME DA TABELA CERTO?

    protected $fillable = ['titulo', 'descricao', 'imagem', 'link', 'tecnologias'];

}
