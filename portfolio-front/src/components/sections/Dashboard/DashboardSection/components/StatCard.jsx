/* ==========================================================================
   📦 PARTE 3: COMPONENTE STATCARD
   📝 Futuro arquivo: /dashboard/components/StatCard.jsx
   Objetivo: Cartão pequeno no topo do dashboard para exibir números/estatísticas.
   ========================================================================== */

import Skeleton from "./Skeleton";

export default function StatCard({ titulo, valor, subtitulo, icone, loading, onAcao, labelAcao }) {
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="stat-card d-flex flex-column gap-2">

        <div className="d-flex justify-content-between align-items-center">
          <p className="stat-card-label">{titulo}</p>
          <div className="stat-card-icon">
            <i className={`bi ${icone}`}></i>
          </div>
        </div>

        {loading
          ? <Skeleton height="2.2rem" width="45%" />
          : <span className="stat-card-value">{valor ?? "—"}</span>
        }

        {loading
          ? <Skeleton height="0.75rem" width="65%" />
          : <p className="stat-card-sub">{subtitulo}</p>
        }

        {onAcao && !loading && (
          <button className="stat-card-action mt-auto" onClick={onAcao}>
            {labelAcao}
          </button>
        )}

      </div>
    </div>
  );
}