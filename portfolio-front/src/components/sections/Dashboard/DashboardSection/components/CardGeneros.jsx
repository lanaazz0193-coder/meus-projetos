/* ==========================================================================
   📦 PARTE 6: COMPONENTE CARD DE GÊNEROS
   📝 Futuro arquivo: /dashboard/components/CardGeneros.jsx
   Objetivo: Bloco lateral que mostra a distribuição/estatísticas de gêneros.
   ========================================================================== */

import Skeleton from "./Skeleton";
import { contarPorGenero } from "../../utils/helpers";

export default function CardGeneros({ livros, loading }) {
  const generos = contarPorGenero(livros);
  const total = livros.length;

  return (
    <div className="data-card">
      <div className="data-card-header">
        <h2 className="data-card-title">Gêneros no acervo</h2>
      </div>
      <div className="p-3 d-flex flex-column gap-3">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="d-flex flex-column gap-2">
              <Skeleton height="0.72rem" width="55%" />
              <Skeleton height="4px" width="100%" />
            </div>
          ))
        ) : total === 0 ? (
          <p className="genre-label mb-0 py-2">Sem dados.</p>
        ) : (
          Object.entries(generos)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([genero, qtd]) => (
              <div key={genero}>
                <div className="d-flex justify-content-between mb-1">
                  <span className="genre-label">{genero}</span>
                  <span className="genre-count">{qtd}</span>
                </div>
                <div className="genre-progress-bar">
                  <div
                    className="genre-progress-fill"
                    style={{ width: `${(qtd / total) * 100}%` }}
                  />
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}