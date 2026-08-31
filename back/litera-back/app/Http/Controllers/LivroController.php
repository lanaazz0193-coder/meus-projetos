<?php

namespace App\Http\Controllers;

use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Livro::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $livro = Livro::create($request->all());
        return response()->json($livro, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Livro $livro)
    {
        $livro = Livro::find($livro->id);
        return $livro
        ? response()->json($livro, 200)
        : response()->json(['erro' => 'Livro não encontrado'], 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Livro $livro)
    {
        $livro = Livro::findOrFail($livro->id);
        $livro->update($request->all());
        return response()->json($livro, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Livro $livro)
    {
        $livro = Livro::findOrFail($livro->id);
        $livro->delete();
        return response()->json(null, 204);
    }
}
