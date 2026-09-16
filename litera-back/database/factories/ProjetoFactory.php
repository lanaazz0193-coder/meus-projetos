<?php

namespace Database\Factories;

use App\Models\Projeto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Projeto>
 */
class ProjetoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titulo' => fake()->sentence(2),
            'descricao' => fake()->paragraph(),
            'imagem' => fake()->imageUrl(),
            'link' => fake()->url(),
            'tecnologias' => implode(', ', fake()->words(3)),
        ];
    }
}