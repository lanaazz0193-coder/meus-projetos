import { useState } from "react";
import { useLivrosCrud } from "./useLivrosCrud";
import { useProjetosCrud } from "./useProjetosCrud"; // Hook CRUD para projetos
import LivroModal from "../../ui/LivroModal";
import ProjetoModal from "../../ui/ProjetoModal";     // Modal de criação/edição de projetos
import ConfirmModal from "../../ui/ConfirmModal";
import './dashboard.css';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function contarPorGenero(livros) {
  return livros.reduce((acc, l) => {
    const g = l.genero || "Sem gênero";
    acc[g] = (acc[g] || 0) + 1;
    return acc;
  }, {});
}

function livroMaisRecente(livros) {
  if (!livros.length) return null;
  return livros.reduce((a, b) =>
    new Date(b.created_at) > new Date(a.created_at) ? b : a
  );
}

function formatarData(str) {
  if (!str) return "—";
  return new Date(str).toLocaleDateString("pt-BR");
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function Skeleton({ height = "1rem", width = "60%" }) {
  return (
    <span
      className="skeleton-block"
      style={{ height, width }}
      aria-hidden="true"
    />
  );
}

// ─── StatCard ─────────────────────────────────────────────────────────────────

function StatCard({ titulo, valor, subtitulo, icone, loading, onAcao, labelAcao }) {
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

// ─── TabelaLivros ─────────────────────────────────────────────────────────────

function TabelaLivros({ livros, loading, erro, onNovo, onEditar, onExcluir }) {
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

// ─── TabelaProjetos ───────────────────────────────────────────────────────────

function TabelaProjetos({ projetos, loading, erro, onNovo, onEditar, onExcluir }) {
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


// ─── CardGeneros ──────────────────────────────────────────────────────────────

function CardGeneros({ livros, loading }) {
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

// ─── CardRecentes ─────────────────────────────────────────────────────────────

function CardRecentes({ livros, loading, onEditar }) {
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

// ─── DashboardSection ─────────────────────────────────────────────────────────

const DashboardSection = () => {
  // Hooks de CRUD
  const { livros, loading: loadingLivros, erro: erroLivros, salvar: salvarLivro, excluir: excluirLivro } = useLivrosCrud();
  const { projetos = [], loading: loadingProjetos, erro: erroProjetos, salvar: salvarProjeto, excluir: excluirProjeto } = useProjetosCrud();

  // Estados de Livros
  const [modalFormAberto, setModalFormAberto]         = useState(false);
  const [livroEditando, setLivroEditando]             = useState(null);
  const [modalConfirmAberto, setModalConfirmAberto]   = useState(false);
  const [livroParaExcluir, setLivroParaExcluir]       = useState(null);
  const [salvandoLivro, setSalvandoLivro]             = useState(false);
  const [excluindoLivro, setExcluindoLivro]           = useState(false);
  const [erroModalLivro, setErroModalLivro]           = useState(null);

  // Estados de Projetos
  const [modalProjetoAberto, setModalProjetoAberto]   = useState(false);
  const [projetoEditando, setProjetoEditando]         = useState(null);
  const [confirmProjetoAberto, setConfirmProjetoAberto] = useState(false);
  const [projetoParaExcluir, setProjetoParaExcluir]   = useState(null);
  const [salvandoProjeto, setSalvandoProjeto]         = useState(false);
  const [excluindoProjeto, setExcluindoProjeto]       = useState(false);
  const [erroModalProj, setErroModalProj]             = useState(null);

  const generos        = contarPorGenero(livros);
  const generoDestaque = Object.entries(generos).sort((a, b) => b[1] - a[1])[0];
  const recente        = livroMaisRecente(livros);
  const hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  // Handlers Livros
  function abrirCriarLivro()        { setLivroEditando(null);  setErroModalLivro(null); setModalFormAberto(true); }
  function abrirEditarLivro(livro)  { setLivroEditando(livro); setErroModalLivro(null); setModalFormAberto(true); }
  function abrirExcluirLivro(livro) { setLivroParaExcluir(livro); setModalConfirmAberto(true); }

  async function handleSalvarLivro(dados) {
    setSalvandoLivro(true);
    setErroModalLivro(null);
    const resultado = await salvarLivro(dados, livroEditando?.id ?? null);
    setSalvandoLivro(false);
    if (resultado.ok) setModalFormAberto(false);
    else setErroModalLivro(resultado.erro);
  }

  async function handleExcluirLivro() {
    if (!livroParaExcluir) return;
    setExcluindoLivro(true);
    await excluirLivro(livroParaExcluir.id);
    setExcluindoLivro(false);
    setModalConfirmAberto(false);
    setLivroParaExcluir(null);
  }

  // Handlers Projetos
  function abrirCriarProjeto()         { setProjetoEditando(null); setErroModalProj(null); setModalProjetoAberto(true); }
  function abrirEditarProjeto(proj)    { setProjetoEditando(proj);  setErroModalProj(null); setModalProjetoAberto(true); }
  function abrirExcluirProjeto(proj)   { setProjetoParaExcluir(proj); setConfirmProjetoAberto(true); }

  async function handleSalvarProjeto(dados) {
    setSalvandoProjeto(true);
    setErroModalProj(null);
    const resultado = await salvarProjeto(dados, projetoEditando?.id ?? null);
    setSalvandoProjeto(false);
    if (resultado.ok) setModalProjetoAberto(false);
    else setErroModalProj(resultado.erro);
  }

  async function handleExcluirProjeto() {
    if (!projetoParaExcluir) return;
    setExcluindoProjeto(true);
    await excluirProjeto(projetoParaExcluir.id);
    setExcluindoProjeto(false);
    setConfirmProjetoAberto(false);
    setProjetoParaExcluir(null);
  }

  return (
    <div className="dashboard-wrapper">

      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 className="dashboard-title">Visão Geral</h1>
          <p className="dashboard-subtitle">{hoje}</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn-litera" onClick={abrirCriarProjeto}>
            <i className="bi bi-folder-plus me-1"></i>
            Novo projeto
          </button>
          <button className="btn-litera" onClick={abrirCriarLivro}>
            <i className="bi bi-plus-lg me-1"></i>
            Cadastrar livro
          </button>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="row g-3 mb-4">
        <StatCard
          titulo="Total de livros"
          valor={livros.length}
          subtitulo="no acervo atual"
          icone="bi-book"
          loading={loadingLivros}
          onAcao={abrirCriarLivro}
          labelAcao="+ Adicionar livro"
        />
        <StatCard
          titulo="Total de projetos"
          valor={projetos.length}
          subtitulo="iniciativas cadastradas"
          icone="bi-folder2"
          loading={loadingProjetos}
          onAcao={abrirCriarProjeto}
          labelAcao="+ Adicionar projeto"
        />
        <StatCard
          titulo="Gênero destaque"
          valor={generoDestaque ? generoDestaque[0] : "—"}
          subtitulo={generoDestaque ? `${generoDestaque[1]} título(s)` : "sem dados"}
          icone="bi-star"
          loading={loadingLivros}
        />
        <StatCard
          titulo="Último adicionado"
          valor={recente ? recente.titulo : "—"}
          subtitulo={recente ? `por ${recente.autor}` : "sem dados"}
          icone="bi-clock"
          loading={loadingLivros}
          onAcao={recente ? () => abrirEditarLivro(recente) : undefined}
          labelAcao="Editar"
        />
      </div>

      {/* Linha 1: Tabela Livros + Laterais */}
      <div className="row g-3 align-items-start mb-4">
        <div className="col-12 col-xl-7">
          <TabelaLivros
            livros={livros}
            loading={loadingLivros}
            erro={erroLivros}
            onNovo={abrirCriarLivro}
            onEditar={abrirEditarLivro}
            onExcluir={abrirExcluirLivro}
          />
        </div>
        <div className="col-12 col-xl-5 d-flex flex-column gap-3">
          <CardGeneros livros={livros} loading={loadingLivros} />
          <CardRecentes livros={livros} loading={loadingLivros} onEditar={abrirEditarLivro} />
        </div>
      </div>

      {/* Linha 2: Tabela de Projetos */}
      <div className="row g-3">
        <div className="col-12">
          <TabelaProjetos
            projetos={projetos}
            loading={loadingProjetos}
            erro={erroProjetos}
            onNovo={abrirCriarProjeto}
            onEditar={abrirEditarProjeto}
            onExcluir={abrirExcluirProjeto}
          />
        </div>
      </div>

      {/* Modais de Livros */}
      <LivroModal
        aberto={modalFormAberto}
        onFechar={() => setModalFormAberto(false)}
        onSalvar={handleSalvarLivro}
        livro={livroEditando}
        carregando={salvandoLivro}
        erroApi={erroModalLivro}
      />
      <ConfirmModal
        aberto={modalConfirmAberto}
        onFechar={() => setModalConfirmAberto(false)}
        onConfirmar={handleExcluirLivro}
        titulo={livroParaExcluir?.titulo ?? ""}
        carregando={excluindoLivro}
      />

      {/* Modais de Projetos */}
      {modalProjetoAberto && (
        <ProjetoModal
          aberto={modalProjetoAberto}
          onFechar={() => setModalProjetoAberto(false)}
          onSalvar={handleSalvarProjeto}
          projeto={projetoEditando}
          carregando={salvandoProjeto}
          erroApi={erroModalProj}
        />
      )}
      <ConfirmModal
        aberto={confirmProjetoAberto}
        onFechar={() => setConfirmProjetoAberto(false)}
        onConfirmar={handleExcluirProjeto}
        titulo={projetoParaExcluir?.nome ?? ""}
        carregando={excluindoProjeto}
      />

    </div>
  );
};

export default DashboardSection;