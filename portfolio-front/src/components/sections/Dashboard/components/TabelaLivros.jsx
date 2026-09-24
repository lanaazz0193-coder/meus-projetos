/* ==========================================================================
   📦 PARTE 4: COMPONENTE TABELA DE LIVROS
   📝 Futuro arquivo: /dashboard/components/TabelaLivros.jsx
   Objetivo: Exibir a listagem principal do acervo da biblioteca.
   ========================================================================== */

import Skeleton from "./Skeleton";
import { formatarData } from "../utils/helpers";

export default function TabelaLivros({ livros, loading, erro, onNovo, onEditar, onExcluir }) {
  return (
    <div className="data-card h-100">
      <div className="data-card-header">
        <h2 className="data-card-title">Acervo completo</h2>
        <button className="btn-litera" onClick={onNovo}>
          <i className="bi bi-plus-lg me-1"></i>
          Novo livro
        </button>
      </div>

      {erro && (
        <div className="alert alert-danger m-3 py-2 mb-0" style={{ fontSize: '0.82rem' }}>{erro}</div>
      )}

      <div className="table-responsive">
        <table className="table litera-table mb-0">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Gênero</th>
              <th>Editora</th>
              <th>Lançamento</th>
              <th className="text-end">Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  {[80, 60, 45, 55, 35, 50].map((w, j) => (
                    <td key={j}>
                      <Skeleton height="0.8rem" width={`${w}%`} />
                    </td>
                  ))}
                </tr>
              ))
            ) : livros.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <div className="empty-state">
                    <i className="bi bi-book"></i>
                    Nenhum livro cadastrado ainda.{" "}
                    <button
                      className="btn btn-link btn-sm p-0 text-decoration-none f-red"
                      onClick={onNovo}
                    >
                      Adicionar o primeiro?
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              livros.map((livro) => (
                <tr key={livro.id}>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>
                    <span className="genre-badge">{livro.genero}</span>
                  </td>
                  <td>{livro.editora}</td>
                  <td>{formatarData(livro.data_lancamento)}</td>
                  <td className="text-end">
                    <button
                      className="btn-table-action btn-table-edit me-1"
                      title="Editar"
                      onClick={() => onEditar(livro)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn-table-action btn-table-delete"
                      title="Excluir"
                      onClick={() => onExcluir(livro)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}