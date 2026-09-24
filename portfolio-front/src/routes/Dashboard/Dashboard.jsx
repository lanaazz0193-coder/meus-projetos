import { useState } from "react";
import { useLivrosCrud } from "../../components/sections/Dashboard/useLivrosCrud";
import { useProjetosCrud } from "../../components/sections/Dashboard/useProjetosCrud";

import LivroModal from "../../components/sections/Dashboard/modals/LivroModal";
import ProjetoModal from "../../components/sections/Dashboard/modals/ProjetoModal";
import ConfirmModal from "../../components/sections/Dashboard/modals/ConfirmModal";
import "../../components/sections/Dashboard/dashboard.css";

import { contarPorGenero, livroMaisRecente } from "../../components/sections/Dashboard/utils/helpers";
import StatCard from "../../components/sections/Dashboard/components/StatCard";
import TabelaLivros from "../../components/sections/Dashboard/components/TabelaLivros";
import TabelaProjetos from "../../components/sections/Dashboard/components/TabelaProjetos";
import CardGeneros from "../../components/sections/Dashboard/components/CardGeneros";
import CardRecentes from "../../components/sections/Dashboard/components/CardRecentes";

const Dashboard = () => {
  const { livros, loading: loadingLivros, erro: erroLivros, salvar: salvarLivro, excluir: excluirLivro } = useLivrosCrud();
  const { projetos = [], loading: loadingProjetos, erro: erroProjetos, salvar: salvarProjeto, excluir: excluirProjeto } = useProjetosCrud();

  const [modalFormAberto, setModalFormAberto] = useState(false);
  const [livroEditando, setLivroEditando] = useState(null);
  const [modalConfirmAberto, setModalConfirmAberto] = useState(false);
  const [livroParaExcluir, setLivroParaExcluir] = useState(null);
  const [salvandoLivro, setSalvandoLivro] = useState(false);
  const [excluindoLivro, setExcluindoLivro] = useState(false);
  const [erroModalLivro, setErroModalLivro] = useState(null);

  const [modalProjetoAberto, setModalProjetoAberto] = useState(false);
  const [projetoEditando, setProjetoEditando] = useState(null);
  const [confirmProjetoAberto, setConfirmProjetoAberto] = useState(false);
  const [projetoParaExcluir, setProjetoParaExcluir] = useState(null);
  const [salvandoProjeto, setSalvandoProjeto] = useState(false);
  const [excluindoProjeto, setExcluindoProjeto] = useState(false);
  const [erroModalProj, setErroModalProj] = useState(null);

  const generos = contarPorGenero(livros);
  const generoDestaque = Object.entries(generos).sort((a, b) => b[1] - a[1])[0];
  const recente = livroMaisRecente(livros);
  const hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function abrirCriarLivro() {
    setLivroEditando(null);
    setErroModalLivro(null);
    setModalFormAberto(true);
  }

  function abrirEditarLivro(livro) {
    setLivroEditando(livro);
    setErroModalLivro(null);
    setModalFormAberto(true);
  }

  function abrirExcluirLivro(livro) {
    setLivroParaExcluir(livro);
    setModalConfirmAberto(true);
  }

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

  function abrirCriarProjeto() {
    setProjetoEditando(null);
    setErroModalProj(null);
    setModalProjetoAberto(true);
  }

  function abrirEditarProjeto(proj) {
    setProjetoEditando(proj);
    setErroModalProj(null);
    setModalProjetoAberto(true);
  }

  function abrirExcluirProjeto(proj) {
    setProjetoParaExcluir(proj);
    setConfirmProjetoAberto(true);
  }

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
    <div id="dashboard" className="dashboard-wrapper">
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

export default Dashboard;
