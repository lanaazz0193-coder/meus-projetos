import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router";
import "./project.css";
import Card, { CardSkeleton } from "../../../ui/Card";
import { projetoService } from "../../../../services/projetoService";

/**
 * Constante que define os 3 estados possíveis da seção/cards de projetos:
 * 1. CARREGANDO: busca dados no banco de dados via API.
 * 2. ERRO: falha de rede, banco indisponível ou erro na requisição.
 * 3. SUCESSO: dados carregados com sucesso e renderizados nos cards.
 */
export const ESTADOS_CARDS = {
  CARREGANDO: "carregando",
  ERRO: "erro",
  SUCESSO: "sucesso",
};

const ProjectSection = () => {
  const [projetos, setProjetos] = useState([]);
  const [estado, setEstado] = useState(ESTADOS_CARDS.CARREGANDO);
  const [erro, setErro] = useState(null);

  /**
   * Função para carregar projetos do banco de dados via service.
   */
  const carregarProjetos = useCallback(async () => {
    setEstado(ESTADOS_CARDS.CARREGANDO);
    setErro(null);

    try {
      const dados = await projetoService.getProjetos({ limit: 100 });
      setProjetos(dados);
      setEstado(ESTADOS_CARDS.SUCESSO);
    } catch (err) {
      console.error("Erro ao carregar projetos do banco de dados:", err);
      setErro(
        err.message ||
          "Não foi possível carregar os projetos do banco de dados. Tente novamente."
      );
      setEstado(ESTADOS_CARDS.ERRO);
    }
  }, []);

  useEffect(() => {
    carregarProjetos();
  }, [carregarProjetos]);

  return (
    <section id="projetos" className="py-5 c-gradient">
      <div className="container py-5">
        {/* Título e parágrafo */}
        <div className="text-center mb-5 pb-3">
          <span
            className="fw-bold text-uppercase small mb-2 d-block f-red"
            style={{ letterSpacing: "2px" }}
          >
            Meu Portfólio
          </span>
          <h2 className="display-6 fw-bold f-white mb-3">Projetos em Destaque</h2>
          <p className="fs-5 f-gray">
            Uma seleção dos meus melhores trabalhos e estudos de caso.
          </p>
        </div>

        {/* --- PROJETO PRINCIPAL (Destaque Fixo) --- */}
        <div className="project-card-main rounded-4 overflow-hidden mb-5">
          <div className="row g-0 align-items-stretch">
            {/* Imagem do Projeto Principal */}
            <div className="col-lg-7">
              <div className="project-img-wrapper">
                <img
                  src="/src/assets/imgs/biblioteca-project.jpg"
                  className="img-fluid project-img-custom"
                  alt="Capa do Projeto Principal"
                />
              </div>
            </div>

            {/* Informações do Projeto Principal */}
            <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-center">
              {/* Tecnologias */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge badge-project rounded-pill px-3 py-2">
                  HTML & CSS
                </span>
                <span className="badge badge-project rounded-pill px-3 py-2">
                  Laravel
                </span>
                <span className="badge badge-project rounded-pill px-3 py-2">
                  MySQL
                </span>
              </div>

              {/* Título e parágrafo */}
              <h3 className="fw-bold mb-3 f-white display-6">Litera</h3>
              <p className="mb-4 lh-lg f-gray">
                Sistema web para gerenciamento de livros. Criado no curso
                técnico, o projeto foca em organização, usabilidade e código
                limpo. Confira o resultado!
              </p>

              {/* Botão para ver o projeto */}
              <div className="mt-2">
                <Link
                  to="/litera"
                  onClick={() => window.scrollTo(0, 0)}
                  className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase"
                >
                  Ver Projeto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <hr className="hr-darkred" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3">
          <h4 className="fw-bold fs-2 f-white mb-0">Outros projetos</h4>

          {/* Indicador sutil de status e botão de recarregar */}
          <div className="d-flex align-items-center gap-3">
            {estado === ESTADOS_CARDS.CARREGANDO && (
              <span className="badge bg-dark border border-secondary text-secondary small py-2 px-3">
                <span
                  className="spinner-border spinner-border-sm me-2 text-danger"
                  role="status"
                />
                Buscando do banco de dados...
              </span>
            )}
            {estado === ESTADOS_CARDS.SUCESSO && projetos.length > 0 && (
              <span className="badge bg-dark border border-darker text-light small py-2 px-3">
                {projetos.length}{" "}
                {projetos.length === 1 ? "projeto carregado" : "projetos carregados"}
              </span>
            )}
            <button
              type="button"
              className="btn btn-sm btn-social-custom px-3 py-2 rounded-1 text-uppercase d-flex align-items-center gap-1"
              title="Recarregar projetos do banco"
              onClick={carregarProjetos}
              disabled={estado === ESTADOS_CARDS.CARREGANDO}
            >
              <i className="bi bi-arrow-clockwise" />
              Atualizar
            </button>
          </div>
        </div>

        {/* --- GRID DE PROJETOS COM OS 3 ESTADOS --- */}
        <div className="row g-4">
          {/* ESTADO 1: CARREGANDO */}
          {estado === ESTADOS_CARDS.CARREGANDO && (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}

          {/* ESTADO 2: ERRO */}
          {estado === ESTADOS_CARDS.ERRO && (
            <div className="col-12">
              <div
                className="p-5 rounded-4 text-center border border-danger border-opacity-25"
                style={{ backgroundColor: "rgba(184, 10, 6, 0.08)" }}
              >
                <i
                  className="bi bi-exclamation-triangle-fill text-danger mb-3 d-inline-block"
                  style={{ fontSize: "3rem" }}
                />
                <h5 className="fw-bold f-white mb-2 fs-4">
                  Não foi possível carregar os projetos
                </h5>
                <p
                  className="f-gray mb-4 mx-auto"
                  style={{ maxWidth: "560px" }}
                >
                  {erro}
                </p>
                <button
                  type="button"
                  className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase d-inline-flex align-items-center gap-2"
                  onClick={carregarProjetos}
                >
                  <i className="bi bi-arrow-clockwise" />
                  Tentar novamente
                </button>
              </div>
            </div>
          )}

          {/* ESTADO 3: SUCESSO */}
          {estado === ESTADOS_CARDS.SUCESSO && (
            <>
              {projetos.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <i
                    className="bi bi-folder2-open f-gray"
                    style={{ fontSize: "3rem" }}
                  />
                  <p className="f-gray mt-3 fs-5">
                    Nenhum projeto encontrado no banco de dados.
                  </p>
                  <button
                    type="button"
                    className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase mt-2"
                    onClick={carregarProjetos}
                  >
                    <i className="bi bi-arrow-clockwise me-2" />
                    Buscar novamente
                  </button>
                </div>
              ) : (
                projetos.map((proj, index) => (
                  <Card key={proj.id ?? `proj-${index}`} projeto={proj} />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;