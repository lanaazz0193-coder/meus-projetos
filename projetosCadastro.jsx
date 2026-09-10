import { useState } from 'react';
import { Link } from 'react-router';
import './project.css';
import { usePortfolioCrud } from './usePortfolioCrud';
import PortfolioProjetoModal from '../../ui/PortfolioProjetoModal';
import ConfirmModal from '../../ui/ConfirmModal';

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card-secondary h-100 rounded-4 overflow-hidden">
        <div className="project-img-wrapper" style={{ minHeight: '200px', background: '#1a1a1a' }} />
        <div className="p-4 d-flex flex-column gap-2">
          <div className="skeleton-project" style={{ height: '1.2rem', width: '60%' }} />
          <div className="skeleton-project" style={{ height: '0.85rem', width: '90%' }} />
          <div className="skeleton-project" style={{ height: '0.85rem', width: '75%' }} />
          <div className="d-flex gap-2 mt-2">
            <div className="skeleton-project" style={{ height: '1.4rem', width: '60px', borderRadius: '4px' }} />
            <div className="skeleton-project" style={{ height: '1.4rem', width: '50px', borderRadius: '4px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card de projeto dinâmico ──────────────────────────────────────────────────

function ProjetoCard({ proj, onEditar, onExcluir }) {
  const titulo   = proj.title    ?? proj.titulo    ?? "Projeto";
  const descricao = proj.text   ?? proj.descricao  ?? "";
  const imagem   = proj.imageSrc ?? proj.imagem    ?? "";
  const link     = proj.linkUrl  ?? proj.link      ?? "#";
  const techs    = Array.isArray(proj.tech)
    ? proj.tech
    : (proj.tecnologias ? String(proj.tecnologias).split(",").map(t => t.trim()) : []);

  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card-secondary h-100 rounded-4 overflow-hidden position-relative">

        {/* Ações de edição — visíveis apenas em hover */}
        <div className="project-admin-actions">
          <button
            className="project-admin-btn"
            title="Editar projeto"
            onClick={() => onEditar(proj)}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="project-admin-btn project-admin-btn-delete"
            title="Excluir projeto"
            onClick={() => onExcluir(proj)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>

        {/* Imagem */}
        <div className="project-img-wrapper" style={{ minHeight: '200px' }}>
          {imagem
            ? <img src={imagem} className="project-img-custom" alt={titulo} />
            : <div className="project-img-placeholder d-flex align-items-center justify-content-center h-100">
                <i className="bi bi-image text-secondary" style={{ fontSize: '2rem' }}></i>
              </div>
          }
        </div>

        {/* Conteúdo */}
        <div className="p-4 d-flex flex-column flex-grow-1">
          <h5 className="fw-bold mb-2 f-white fs-4">{titulo}</h5>
          <p className="small mb-4 f-lightgray flex-grow-1">{descricao}</p>

          {techs.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mb-4">
              {techs.map((t, i) => (
                <span key={i} className="badge badge-project rounded-1 px-2 py-1">{t}</span>
              ))}
            </div>
          )}

          <a
            href={link}
            className="link-project-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detalhes
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Projeto Principal (destaque fixo: Litera) ────────────────────────────────

function ProjetoPrincipal() {
  return (
    <div className="project-card-main rounded-4 overflow-hidden mb-5">
      <div className="row g-0 align-items-stretch">

        <div className="col-lg-7">
          <div className="project-img-wrapper">
            <img
              src="/src/assets/imgs/biblioteca-project.jpg"
              className="img-fluid project-img-custom"
              alt="Capa do Projeto Principal"
            />
          </div>
        </div>

        <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-center">
          <div className="d-flex flex-wrap gap-2 mb-4">
            <span className="badge badge-project rounded-pill px-3 py-2">HTML & CSS</span>
            <span className="badge badge-project rounded-pill px-3 py-2">Laravel</span>
            <span className="badge badge-project rounded-pill px-3 py-2">MySQL</span>
          </div>
          <h3 className="fw-bold mb-3 f-white display-6">Litera</h3>
          <p className="mb-4 lh-lg f-gray">
            Sistema web para gerenciamento de livros. Criado no curso técnico,
            o projeto foca em organização, usabilidade e código limpo. Confira o resultado!
          </p>
          <div className="mt-2">
            <Link to="/litera" className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase">
              Ver Projeto
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function OutrosProjetos() {
  return (
    <div className="row g-4">
      {/* Card 1: DevZone */}
      <div className="col-md-6 col-lg-4">
        <div className="project-card-secondary h-100 rounded-4 overflow-hidden">
          <div className="project-img-wrapper" style={{ minHeight: '200px' }}>
            <img  
              src="/src/assets/imgs/dz-project.jpg" 
              className="project-img-custom" 
              alt="DevZone" 
            />
          </div>
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h5 className="fw-bold mb-2 f-white fs-4">DevZone</h5>
            <p className="small mb-4 f-lightgray flex-grow-1">
              Projeto em equipe desenvolvido no curso. Com forte foco em back-end, trabalhamos juntos para estruturar a lógica e criar um sistema robusto por trás da interface.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge badge-project rounded-1 px-2 py-1">HTML</span>
              <span className="badge badge-project rounded-1 px-2 py-1">Bootstrap</span>
            </div>
            <a href="#" className="link-project-custom">Detalhes</a>
          </div>
        </div>
      </div>

      {/* Card 2: Eterna Paz */}
      <div className="col-md-6 col-lg-4">
        <div className="project-card-secondary h-100 rounded-4 overflow-hidden">
          <div className="project-img-wrapper" style={{ minHeight: '200px' }}>
            <img 
              src="/src/assets/imgs/cemterio-project.jpg" 
              className="project-img-custom" 
              alt="Eterna Paz" 
            />
          </div>
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h5 className="fw-bold mb-2 f-white fs-4">Eterna Paz</h5>
            <p className="small mb-4 f-lightgray flex-grow-1">
              Site desenvolvido para uma funerária. O projeto foca em um design respeitoso, sereno e responsivo, oferecendo informações de forma clara.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge badge-project rounded-1 px-2 py-1">HTML</span>
              <span className="badge badge-project rounded-1 px-2 py-1">CSS</span>
            </div>
            <a href="#" className="link-project-custom">Detalhes</a>
          </div>
        </div>
      </div>

      {/* Card 3: Portal EEPSAS */}
      <div className="col-md-6 col-lg-4">
        <div className="project-card-secondary h-100 rounded-4 overflow-hidden">
          <div className="project-img-wrapper" style={{ minHeight: '200px' }}>
            <img 
              src="/src/assets/imgs/portal-project.jpg" 
              className="project-img-custom" 
              alt="Portal EEPSAS" 
            />
          </div>
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h5 className="fw-bold mb-2 f-white fs-4">Portal EEPSAS</h5>
            <p className="small mb-4 f-lightgray flex-grow-1">
              Criado colaborativamente no curso para entregar uma plataforma moderna, intuitiva e útil para alunos e professores.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge badge-project rounded-1 px-2 py-1">React</span>
              <span className="badge badge-project rounded-1 px-2 py-1">Laravel</span>
            </div>
            <a href="#" className="link-project-custom">Detalhes</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ProjectSection ───────────────────────────────────────────────────────────

const ProjectSection = () => {
  const { projetos, loading, salvar, excluir } = usePortfolioCrud();

  const [modalAberto, setModalAberto]         = useState(false);
  const [projetoEditando, setProjetoEditando] = useState(null);
  const [confirmAberto, setConfirmAberto]     = useState(false);
  const [projetoExcluir, setProjetoExcluir]   = useState(null);
  const [salvando, setSalvando]               = useState(false);
  const [excluindo, setExcluindo]             = useState(false);
  const [erroModal, setErroModal]             = useState(null);

  function abrirCriar()        { setProjetoEditando(null);  setErroModal(null); setModalAberto(true); }
  function abrirEditar(proj)   { setProjetoEditando(proj);  setErroModal(null); setModalAberto(true); }
  function abrirExcluir(proj)  { setProjetoExcluir(proj);   setConfirmAberto(true); }

  async function handleSalvar(dados) {
    setSalvando(true);
    setErroModal(null);
    const resultado = await salvar(dados, projetoEditando?.id ?? null);
    setSalvando(false);
    if (resultado.ok) setModalAberto(false);
    else setErroModal(resultado.erro);
  }

  async function handleExcluir() {
    if (!projetoExcluir) return;
    setExcluindo(true);
    await excluir(projetoExcluir.id);
    setExcluindo(false);
    setConfirmAberto(false);
    setProjetoExcluir(null);
  }

  return (
    <section id="projetos" className="py-5 c-gradient">
      <div className="container py-5">

        {/* Título */}
        <div className="text-center mb-5 pb-3">
          <span className="fw-bold text-uppercase small mb-2 d-block f-red" style={{ letterSpacing: '2px' }}>
            Meu Portfólio
          </span>
          <h2 className="display-6 fw-bold f-white mb-3">Projetos em Destaque</h2>
          <p className="fs-5 f-gray">Uma seleção dos meus melhores trabalhos e estudos de caso.</p>
        </div>

        {/* Projeto principal */}
        <ProjetoPrincipal />

        <OutrosProjetos />

        

        <hr className="hr-darkred" />

        {/* Cabeçalho da grade + botão de adicionar */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4 className="fw-bold fs-2 f-white mb-0">Outros projetos</h4>
          <button
            className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase d-flex align-items-center gap-2"
            onClick={abrirCriar}
          >
            <i className="bi bi-plus-lg"></i>
            Novo projeto
          </button>
        </div>

        {/* Grade de projetos */}
        <div className="row g-4">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
          ) : projetos.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i className="bi bi-folder2-open f-gray" style={{ fontSize: '3rem' }}></i>
              <p className="f-gray mt-3">Nenhum projeto cadastrado ainda.</p>
              <button
                className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase mt-2"
                onClick={abrirCriar}
              >
                Adicionar primeiro projeto
              </button>
            </div>
          ) : (
            projetos.map((proj) => (
              <ProjetoCard
                key={proj.id}
                proj={proj}
                onEditar={abrirEditar}
                onExcluir={abrirExcluir}
              />
            ))
          )}
        </div>

      </div>

      {/* Modais */}
      <PortfolioProjetoModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        onSalvar={handleSalvar}
        projeto={projetoEditando}
        carregando={salvando}
        erroApi={erroModal}
      />
      <ConfirmModal
        aberto={confirmAberto}
        onFechar={() => setConfirmAberto(false)}
        onConfirmar={handleExcluir}
        titulo={projetoExcluir?.title ?? projetoExcluir?.titulo ?? ""}
        carregando={excluindo}
      />

    </section>
  );
};

export default ProjectSection;