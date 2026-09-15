/* ==========================================================================
   📦 PARTE 7: COMPONENTE CARD DE RECENTES
   📝 Futuro arquivo: /dashboard/components/CardRecentes.jsx
   Objetivo: Bloco lateral que lista os últimos livros cadastrados.
   ========================================================================== */

import Skeleton from "./Skeleton";
import { formatarData } from "../../utils/helpers";

export default function CardRecentes({ livros, loading, onEditar }) {
  const recentes = [...livros]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  return (
    <div className="data-card">
      <div className="data-card-header">
        <h2 className="data-card-title">Adicionados recentemente</h2>
      </div>

      <ul className="list-unstyled mb-0">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="recent-item">
              <div className="d-flex flex-column gap-1 flex-grow-1 overflow-hidden">
                <Skeleton height="0.82rem" width="70%" />
                <Skeleton height="0.7rem" width="45%" />
              </div>
            </li>
          ))
        ) : recentes.length === 0 ? (
          <li className="empty-state">
            <i className="bi bi-clock-history"></i>
            Nenhum livro ainda.
          </li>
        ) : (
          recentes.map((livro) => (
            <li key={livro.id} className="recent-item">
              <div className="overflow-hidden flex-grow-1">
                <p className="recent-title">{livro.titulo}</p>
                <p className="recent-author">{livro.autor}</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="recent-date">{formatarData(livro.created_at)}</span>
                <button
                  className="btn-table-action btn-table-edit"
                  title="Editar"
                  onClick={() => onEditar(livro)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

