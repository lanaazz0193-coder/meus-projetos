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

        $tech = $this->tecnologias;
        if (is_string($tech)) {
            $decoded = json_decode($tech, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                $tech = $decoded;
            } else {
                $tech = array_values(array_filter(array_map('trim', explode(',', $tech))));
            }
        }

        return [
            'id' => $this->id,
            'title' => $this->titulo,
            'text' => $this->descricao,
            'imageSrc' => $this->imagem,
            'linkUrl' => $this->link,
            'linkText' => 'Acessar',
            'tech' => is_array($tech) ? $tech : [],
            'tecnologias' => $this->tecnologias,
        ];
    }
}
