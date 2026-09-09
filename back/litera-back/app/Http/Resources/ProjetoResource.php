<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjetoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'title' => $this->titulo,
            'text' => $this->descricao,
            'imageSrc' => $this->imagem,
            'linkUrl' => $this->link,
            'linkText' => 'Acessar',
            'tech' => is_string($this->tecnologias) ? json_decode($this->tecnologias) : $this->tecnologias,
        ];
    }
}
