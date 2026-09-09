<?php

namespace App\Http\Controllers;

use App\Models\Projeto;
use Illuminate\Http\Request;
use App\Http\Resources\ProjetoResource;

class ProjetoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    
    {
        //Buscamos os dados 'mais recentes' registrados (essa busca é feita pelo campo timestamp)
        //Respeitando o limite definido pelo usuário, tendo como padrão 3 requisições
        $limit = $request->input('limit', 3);
        
        $projeto = Projeto::latest()->take($limit)->get();

        //O método 'collection' é usado quando retornamos uma LISTA (array de objetos)
        return ProjetoResource::collection($projeto);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $projeto = Projeto::create($request->all());
        return response()->json($projeto, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Projeto $projeto)
    {
        $projeto = Projeto::find($projeto->id);
        return $projeto
        ? response()->json($projeto, 200)
        : response()->json(['erro' => 'Projeto não encontrado'], 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Projeto $projeto)
    {
        $projeto = Projeto::findOrFail($projeto->id);
        $projeto->update($request->all());
        return response()->json($projeto, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projeto $projeto)
    {
        $projeto = Projeto::findOrFail($projeto->id);
        $projeto->delete();
        return response()->json(null, 204);
    }
}
