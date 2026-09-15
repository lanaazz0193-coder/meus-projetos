/* ==========================================================================
   📦 PARTE 5: COMPONENTE TABELA DE PROJETOS
   📝 Futuro arquivo: /dashboard/components/TabelaProjetos.jsx
   Objetivo: Exibir a listagem dos projetos.
   ========================================================================== */

import Skeleton from "./Skeleton";

export default function TabelaProjetos({ projetos, loading, erro, onNovo, onEditar, onExcluir }) {
  return (
    <div className="data-card h-100">
      <div className="data-card-header">
        <h2 className="data-card-title">Projetos</h2>
        <button className="btn-litera" onClick={onNovo}>
          <i className="bi bi-plus-lg me-1"></i>
          Novo projeto
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
              <th>Descrição</th>
              <th>Tecnologias</th>
              <th>Link</th>
              <th className="text-end">Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <tr key={i}>
                  {[70, 85, 40, 45, 50].map((w, j) => (
                    <td key={j}>
                      <Skeleton height="0.8rem" width={`${w}%`} />
                    </td>
                  ))}
                </tr>
              ))
            ) : projetos.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="empty-state">
                    <i className="bi bi-folder2-open"></i>
                    Nenhum projeto cadastrado ainda.{" "}
                    <button
                      className="btn btn-link btn-sm p-0 text-decoration-none f-spicymix"
                      onClick={onNovo}
                    >
                      Criar o primeiro?
                    </button>
                  </div>
                </td>
              </tr>
              ) : (
              projetos.map((proj) => {
                const titulo    = proj.title   ?? proj.titulo   ?? "—";
                const descricao = proj.text    ?? proj.descricao ?? "";
                const techs     = Array.isArray(proj.tech)
                  ? proj.tech
                  : (proj.tecnologias ? String(proj.tecnologias).split(",") : []);
                const link      = proj.linkUrl ?? proj.link     ?? "";

                return (
                  <tr key={proj.id}>
                    <td>{titulo}</td>
                    <td className="text-truncate" style={{ maxWidth: "220px" }}>
                      {descricao || "—"}
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-1">
                        {techs.length > 0
                          ? techs.slice(0, 3).map((t, i) => (
                              <span key={i} className="genre-badge">{String(t).trim()}</span>
                            ))
                          : <span className="text-muted small">—</span>
                        }
                        {techs.length > 3 && (
                          <span className="genre-badge">+{techs.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td>
                      {link
                        ? <a href={link} target="_blank" rel="noopener noreferrer" className="f-spicymix small text-decoration-none">Ver ↗</a>
                        : <span className="text-muted small">—</span>
                      }
                    </td>
                    <td className="text-end">
                      <button
                        className="btn-table-action btn-table-edit me-1"
                        title="Editar"
                        onClick={() => onEditar(proj)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn-table-action btn-table-delete"
                        title="Excluir"
                        onClick={() => onExcluir(proj)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

