import { useMemo } from "react";
import { Link } from "react-router";

// Importa o hook e o CSS da pasta pai (Dashboard)
import { useLivrosCrud } from "../../components/sections/Dashboard/useLivrosCrud";
import "../../components/sections/Dashboard/dashboard.css";

/* ==========================================================================
   📦 SKELETON GENÉRICO
   ========================================================================== */
function Skeleton({ height = "1rem", width = "60%" }) {
  return <span className="skeleton-block" style={{ height, width }} aria-hidden="true" />;
}

/* ==========================================================================
   📦 COMPONENTE: STAT CARD (Reaproveitado do Dashboard)
   ========================================================================== */
function StatCard({ titulo, valor, subtitulo, icone, loading }) {
  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="stat-card d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center">
          <p className="stat-card-label">{titulo}</p>
          <div className="stat-card-icon">
            <i className={`bi ${icone}`}></i>
          </div>
        </div>
        {loading ? <Skeleton height="2.2rem" width="45%" /> : <span className="stat-card-value">{valor ?? "0"}</span>}
        {loading ? <Skeleton height="0.75rem" width="65%" /> : <p className="stat-card-sub">{subtitulo}</p>}
      </div>
    </div>
  );
}

/* ==========================================================================
   📦 COMPONENTE PRINCIPAL: RELATÓRIOS
   ========================================================================== */
const RelatoriosSection = () => {
  const { livros, loading, erro } = useLivrosCrud();

  // 🧠 CÁLCULOS ESTATÍSTICOS (Só refaz o cálculo se a lista de livros mudar)
  const estatisticas = useMemo(() => {
    if (!livros || livros.length === 0) return null;

    let paginasTotais = 0;
    let lidos = 0;
    const contagemGeneros = {};
    const contagemAutores = {};

    livros.forEach((livro) => {
      // 1. Páginas (se você tiver um campo "paginas", ele soma. Se não, soma 0)
      paginasTotais += Number(livro.paginas) || 0;

      // 2. Livros lidos (Assumindo que você possa ter um campo "lido: true" ou "status: 'lido'")
      if (livro.lido || livro.status === 'lido') lidos += 1;

      // 3. Contagem de Gêneros
      const genero = livro.genero || "Sem gênero";
      contagemGeneros[genero] = (contagemGeneros[genero] || 0) + 1;

      // 4. Contagem de Autores
      const autor = livro.autor || "Desconhecido";
      contagemAutores[autor] = (contagemAutores[autor] || 0) + 1;
    });

    // Ordena Gêneros e Autores do maior para o menor
    const topGeneros = Object.entries(contagemGeneros).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const topAutores = Object.entries(contagemAutores).sort((a, b) => b[1] - a[1]).slice(0, 5);

    return {
      totalLivros: livros.length,
      lidos,
      paginasTotais,
      mediaPaginas: Math.round(paginasTotais / livros.length) || 0,
      topGeneros,
      topAutores
    };
  }, [livros]);

  // Histórico Recente (Últimos 5 cadastrados/lidos)
  const historicoRecente = [...(livros || [])]
    .sort((a, b) => new Date(b.created_at || b.data) - new Date(a.created_at || a.data))
    .slice(0, 5);

  return (
    <div className="dashboard-wrapper">

      {/* Link de Navegação */}
      <div className="mb-4">
        <Link to="/litera-app/dashboard" className="text-decoration-none" style={{ color: 'var(--millbrook)', fontSize: '0.9rem' }}>
          <i className="bi bi-arrow-left me-2"></i>
          Voltar para o Dashboard
        </Link>
      </div>

      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 className="dashboard-title">Relatórios e Estatísticas</h1>
          <p className="dashboard-subtitle">Acompanhe seus hábitos de leitura e os dados do seu acervo</p>
        </div>
      </div>

      {erro && (
        <div className="alert alert-danger mb-4">
          <i className="bi bi-exclamation-triangle me-2"></i> {erro}
        </div>
      )}

      {/* 4 Stat Cards */}
      <div className="row g-3 mb-4">
        <StatCard
          titulo="Total do Acervo"
          valor={estatisticas?.totalLivros}
          subtitulo="livros cadastrados"
          icone="bi-collection"
          loading={loading}
        />
        <StatCard
          titulo="Livros Lidos"
          valor={estatisticas?.lidos}
          subtitulo="concluídos até agora"
          icone="bi-check-circle"
          loading={loading}
        />
        <StatCard
          titulo="Páginas Lidas"
          valor={estatisticas?.paginasTotais}
          subtitulo="soma de todos os livros"
          icone="bi-file-earmark-text"
          loading={loading}
        />
        <StatCard
          titulo="Média por Livro"
          valor={estatisticas ? `${estatisticas.mediaPaginas} pág` : "0"}
          subtitulo="tamanho médio do acervo"
          icone="bi-bar-chart"
          loading={loading}
        />
      </div>

      <div className="row g-3 mb-4">
        {/* Top Gêneros */}
        <div className="col-12 col-md-6">
          <div className="data-card h-100">
            <div className="data-card-header">
              <h2 className="data-card-title">Gêneros Favoritos</h2>
            </div>
            <div className="p-4 d-flex flex-column gap-3">
              {loading ? (
                 <Skeleton height="100px" width="100%" />
              ) : !estatisticas || estatisticas.topGeneros.length === 0 ? (
                <p className="text-muted small">Sem dados suficientes.</p>
              ) : (
                estatisticas.topGeneros.map(([genero, qtd]) => (
                  <div key={genero}>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="genre-label fw-bold">{genero}</span>
                      <span className="genre-count">{qtd} livro(s)</span>
                    </div>
                    <div className="genre-progress-bar">
                      <div
                        className="genre-progress-fill"
                        style={{ width: `${(qtd / estatisticas.totalLivros) * 100}%` }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Top Autores */}
        <div className="col-12 col-md-6">
          <div className="data-card h-100">
            <div className="data-card-header">
              <h2 className="data-card-title">Autores Mais Lidos</h2>
            </div>
            <div className="p-4">
              {loading ? (
                 <Skeleton height="100px" width="100%" />
              ) : !estatisticas || estatisticas.topAutores.length === 0 ? (
                <p className="text-muted small">Sem dados suficientes.</p>
              ) : (
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  {estatisticas.topAutores.map(([autor, qtd], index) => (
                    <li key={autor} className="d-flex align-items-center justify-content-between border-bottom pb-2">
                      <div className="d-flex align-items-center gap-3">
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(140, 94, 71, 0.12)', color: 'var(--spicymix)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {index + 1}
                        </div>
                        <span className="text-dark fw-semibold">{autor}</span>
                      </div>
                      <span className="genre-badge">{qtd} {qtd === 1 ? 'obra' : 'obras'}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Histórico Recente (Tabela Simplificada) */}
      <div className="row g-3">
        <div className="col-12">
          <div className="data-card">
            <div className="data-card-header">
              <h2 className="data-card-title">Histórico de Adições Recentes</h2>
            </div>
            <div className="table-responsive">
              <table className="table litera-table mb-0">
                <thead>
                  <tr>
                    <th>Livro</th>
                    <th>Autor</th>
                    <th>Gênero</th>
                    <th className="text-end">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="4"><Skeleton height="20px" width="100%" /></td></tr>
                  ) : historicoRecente.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-4 text-muted">
                        Nenhum registro encontrado.
                      </td>
                    </tr>
                  ) : (
                    historicoRecente.map((livro) => (
                      <tr key={livro.id}>
                        <td className="fw-bold">{livro.titulo}</td>
                        <td>{livro.autor}</td>
                        <td><span className="genre-badge">{livro.genero}</span></td>
                        <td className="text-end">
                          {/* Troca a cor dependendo se o livro foi lido ou não */}
                          {(livro.lido || livro.status === 'lido') ? (
                             <span className="text-success small fw-bold"><i className="bi bi-check-all me-1"></i> Lido</span>
                          ) : (
                             <span className="text-warning small fw-bold"><i className="bi bi-clock me-1"></i> Pendente</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RelatoriosSection;