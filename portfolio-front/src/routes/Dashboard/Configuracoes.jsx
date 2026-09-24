import { useState } from "react";
import { Link } from "react-router";

// Hook e CSS da pasta pai
import { useProjetosCrud } from "../../components/sections/Dashboard/useProjetosCrud";
import "../../components/sections/Dashboard/dashboard.css";

// Modais
import ProjetoModal from "../../components/sections/Dashboard/modals/ProjetoModal";     
import ConfirmModal from "../../components/sections/Dashboard/modals/ConfirmModal";

/* ==========================================================================
   📦 SKELETON GENÉRICO
   ========================================================================== */
function Skeleton({ height = "1rem", width = "60%" }) {
  return <span className="skeleton-block" style={{ height, width }} aria-hidden="true" />;
}

/* ==========================================================================
   📦 COMPONENTE: TABELA DE PROJETOS (IDÊNTICO AO ORIGINAL)
   ========================================================================== */
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

/* ==========================================================================
   📦 COMPONENTE: CARD DE PERFIL DO USUÁRIO
   ========================================================================== */
function CardPerfil() {
  const [perfil, setPerfil] = useState({
    nome: "Ana Lívia de Souza Ramos",
    papel: "Desenvolvedora Web / Full Stack",
    instituicao: "E. E. Prof. Sebastiana de Almeida e Silva",
    localizacao: "Coronel Fabriciano, MG",
    github: "lanaazz0193-coder"
  });

  const [editando, setEditando] = useState(false);
  const [salvando, setSalvando] = useState(false);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const handleSalvar = () => {
    setSalvando(true);
    setTimeout(() => {
      setSalvando(false);
      setEditando(false);
    }, 800);
  };

  const inputStyle = {
    borderRadius: '0.5rem',
    border: '1px solid #e8ddd5',
    backgroundColor: editando ? '#fff' : '#faf3ee',
    fontSize: '0.85rem',
    color: 'var(--graphite)'
  };

  return (
    <div className="data-card h-100">
      <div className="data-card-header d-flex justify-content-between align-items-center">
        <h2 className="data-card-title">Perfil do Usuário</h2>
        {!editando && (
          <button className="btn btn-link btn-sm p-0 text-decoration-none f-spicymix" onClick={() => setEditando(true)}>
            <i className="bi bi-pencil-square me-1"></i> Editar
          </button>
        )}
      </div>
      
      <div className="p-4">
        <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom" style={{ borderColor: '#f0e8e0' }}>
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
            style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, var(--paco), var(--spicymix))', color: 'var(--sorrellbrown)', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            {perfil.nome.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h4 className="mb-0 fw-bold" style={{ color: 'var(--graphite)', fontSize: '1.1rem' }}>{perfil.nome}</h4>
            <span className="badge mt-1" style={{ backgroundColor: 'rgba(140, 94, 71, 0.12)', color: 'var(--paco)' }}>
              {perfil.papel}
            </span>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <label className="form-label small fw-bold" style={{ color: 'var(--millbrook)' }}>Nome Completo</label>
            <input type="text" className="form-control px-3 py-2" name="nome" value={perfil.nome} onChange={handleChange} disabled={!editando} style={inputStyle} />
          </div>
          
          <div className="col-12 col-md-6">
            <label className="form-label small fw-bold" style={{ color: 'var(--millbrook)' }}>Atuação / Cargo</label>
            <input type="text" className="form-control px-3 py-2" name="papel" value={perfil.papel} onChange={handleChange} disabled={!editando} style={inputStyle} />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label small fw-bold" style={{ color: 'var(--millbrook)' }}>Localização</label>
            <div className="input-group">
              <span className="input-group-text" style={{ ...inputStyle, borderRight: 'none', backgroundColor: inputStyle.backgroundColor }}><i className="bi bi-geo-alt" style={{ color: 'var(--spicymix)' }}></i></span>
              <input type="text" className="form-control px-3 py-2 border-start-0" name="localizacao" value={perfil.localizacao} onChange={handleChange} disabled={!editando} style={inputStyle} />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label small fw-bold" style={{ color: 'var(--millbrook)' }}>Instituição de Ensino</label>
            <div className="input-group">
              <span className="input-group-text" style={{ ...inputStyle, borderRight: 'none', backgroundColor: inputStyle.backgroundColor }}><i className="bi bi-building" style={{ color: 'var(--spicymix)' }}></i></span>
              <input type="text" className="form-control px-3 py-2 border-start-0" name="instituicao" value={perfil.instituicao} onChange={handleChange} disabled={!editando} style={inputStyle} />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label small fw-bold" style={{ color: 'var(--millbrook)' }}>Usuário do GitHub</label>
            <div className="input-group">
              <span className="input-group-text" style={{ ...inputStyle, borderRight: 'none', backgroundColor: inputStyle.backgroundColor }}><i className="bi bi-github" style={{ color: 'var(--spicymix)' }}></i></span>
              <input type="text" className="form-control px-3 py-2 border-start-0" name="github" value={perfil.github} onChange={handleChange} disabled={!editando} style={inputStyle} />
            </div>
          </div>
        </div>

        {editando && (
          <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top" style={{ borderColor: '#f0e8e0' }}>
            <button className="btn btn-light px-4" onClick={() => setEditando(false)} style={{ fontSize: '0.85rem', fontWeight: '600' }} disabled={salvando}>
              Cancelar
            </button>
            <button className="btn-litera px-4" onClick={handleSalvar} disabled={salvando}>
              {salvando ? (
                <><span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span> Salvando...</>
              ) : (
                <><i className="bi bi-check2-circle me-1"></i> Salvar Alterações</>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   📦 COMPONENTE PRINCIPAL: CONFIGURAÇÕES
   ========================================================================== */
const ConfiguracoesSection = () => {
  const { projetos = [], loading: loadingProjetos, erro: erroProjetos, salvar: salvarProjeto, excluir: excluirProjeto } = useProjetosCrud();

  const [modalProjetoAberto, setModalProjetoAberto]     = useState(false);
  const [projetoEditando, setProjetoEditando]           = useState(null);
  const [confirmProjetoAberto, setConfirmProjetoAberto] = useState(false);
  const [projetoParaExcluir, setProjetoParaExcluir]     = useState(null);
  const [salvandoProjeto, setSalvandoProjeto]           = useState(false);
  const [excluindoProjeto, setExcluindoProjeto]         = useState(false);
  const [erroModalProj, setErroModalProj]               = useState(null);

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

      <div className="mb-4">
        <Link to="/litera-app/dashboard" className="text-decoration-none" style={{ color: 'var(--millbrook)', fontSize: '0.9rem' }}>
          <i className="bi bi-arrow-left me-2"></i>
          Voltar para o Dashboard
        </Link>
      </div>

      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 className="dashboard-title">Configurações</h1>
          <p className="dashboard-subtitle">Gerencie seu perfil, projetos e preferências do sistema</p>
        </div>
      </div>

      {/* 1ª LINHA: PERFIL DO USUÁRIO NO TOPO */}
      <div className="row mb-4">
        <div className="col-12 col-xl-10 mx-auto">
          <CardPerfil />
        </div>
      </div>

      {/* 2ª LINHA: TABELA DE PROJETOS IDÊNTICA À ORIGINAL */}
      <div className="row mb-4">
        <div className="col-12 col-xl-10 mx-auto">
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
      
      {confirmProjetoAberto && (
        <ConfirmModal
          aberto={confirmProjetoAberto}
          onFechar={() => setConfirmProjetoAberto(false)}
          onConfirmar={handleExcluirProjeto}
          titulo={projetoParaExcluir?.nome ?? ""}
          carregando={excluindoProjeto}
        />
      )}

    </div>
  );
};

export default ConfiguracoesSection;