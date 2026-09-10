import { Link } from "react-router";
import './litera.css';

const LiteraSection = () => {
  return (
    <section className="litera-section py-5">
      <div className="container py-5">

        {/* ── Cabeçalho central ──────────────────────────── */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="litera-badge">Projeto Destaque</span>
            <h1 className="litera-title mb-4">
              O Refúgio das <span className="litera-title-accent">Palavras</span>
            </h1>
            <p className="litera-lead">
              Uma biblioteca digital pessoal projetada para catalogar leituras, registrar resenhas
              e preservar os aprendizados mais profundos de cada página virada. Mais que um sistema,
              um santuário para mentes curiosas.
            </p>
          </div>
        </div>

        <hr className="litera-hr mb-5" />

        {/* ── Citações ───────────────────────────────────── */}
        <div className="row g-4 mb-5">

          <div className="col-md-6">
            <div className="quote-card h-100">
              <p className="quote-text">
                "A vida de Ivan Ilitch fora a mais simples e a mais comum,
                e portanto a mais terrível."
              </p>
              <p className="quote-author">— Liev Tolstói</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="quote-card h-100">
              <p className="quote-text">
                "O segredo da existência humana não consiste somente em viver,
                mas em saber pelo que se vive."
              </p>
              <p className="quote-author">— Fiódor Dostoiévski</p>
            </div>
          </div>

        </div>

        {/* ── Divisor ────────────────────────────────────── */}
        <div className="text-center my-5">
          <span className="litera-divider">• • •</span>
        </div>

        {/* ── Cards de features ──────────────────────────── */}
        <div className="row g-4 mb-5">

          <div className="col-12 mb-3">
            <h2 className="litera-title" style={{}}>
              O que tem <span className="litera-title-accent">por dentro?</span>
            </h2>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="bi bi-collection feature-icon"></i>
              </div>
              <h4 className="feature-title">Acervo Digital</h4>
              <p className="feature-text">
                Um catálogo minucioso de cada livro lido, organizado por gênero, autor e ano.
                Cada entrada possui capa, sinopse e uma contagem de progresso de leitura.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="bi bi-journal-text feature-icon"></i>
              </div>
              <h4 className="feature-title">Resenhas e Notas</h4>
              <p className="feature-text">
                Mais do que guardar nomes, o sistema permite o registro de highlights,
                anotações pessoais críticas e a construção de resenhas detalhadas.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="bi bi-bar-chart-line feature-icon"></i>
              </div>
              <h4 className="feature-title">Estatísticas Reais</h4>
              <p className="feature-text">
                Um dashboard que gera gráficos automáticos das métricas de leitura:
                páginas lidas por mês, autores favoritos e diversidade de gêneros literários.
              </p>
            </div>
          </div>

        </div>

        {/* ── Card CTA ───────────────────────────────────── */}
        <div className="litera-cta-card">
          <span className="litera-cta-eyebrow">Experiência ao vivo</span>
          <h2 className="litera-cta-title">
            Pronto para explorar as estantes?
          </h2>
          <p className="litera-cta-text">
            Acesse a plataforma agora mesmo. Navegue pelo acervo, leia as resenhas completas
            e veja como o design e o código se unem neste projeto.
          </p>
          <Link to="/litera-app/login" className="btn-litera-cta">
            Visitar Projeto
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LiteraSection;