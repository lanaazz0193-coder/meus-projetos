import { useState, useEffect } from "react";
import { Link } from "react-router";
import './litera.css';

const LiteraSection = () => {
  // ── LÓGICA DO PARALLAX (ESTANTE VIVA) ──────────────────
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 30;
    const moveY = (e.clientY - window.innerHeight / 2) / 30;
    setMousePos({ x: moveX, y: moveY });
  };

  const floatingBooks = [
    { cor: "#4B1912", top: "10%", left: "5%", width: "120px", height: "180px", rotate: -15, speed: 1.5 },
    { cor: "#8C5E47", top: "15%", right: "10%", width: "140px", height: "210px", rotate: 20, speed: -1.2 },
    { cor: "#260808", bottom: "10%", left: "15%", width: "160px", height: "240px", rotate: 10, speed: 0.8 },
    { cor: "#593C34", bottom: "15%", right: "5%", width: "130px", height: "190px", rotate: -25, speed: -1.8 },
    { cor: "#C8A589", top: "45%", left: "-2%", width: "110px", height: "160px", rotate: 45, speed: 2 },
    { cor: "#4B1912", top: "50%", right: "-3%", width: "150px", height: "220px", rotate: -35, speed: -2 },
  ];

  // ── LÓGICA DA MÁQUINA DE ESCREVER ──────────────────────
  const frases = [
    "Bem-vindo ao Litera."
  ];
  
  const [texto, setTexto] = useState("");
  const [fraseIndex, setFraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mostrarBotoes, setMostrarBotoes] = useState(false);

  useEffect(() => {
    if (fraseIndex >= frases.length) return;

    const fraseAtual = frases[fraseIndex];
    const velocidadeDigitacao = isDeleting ? 40 : 90;
    const pausaAoTerminarFrase = 1500;

    if (!isDeleting && texto === fraseAtual) {
      if (fraseIndex === frases.length - 1) {
        setTimeout(() => setMostrarBotoes(true), 800);
        return;
      }
      setTimeout(() => setIsDeleting(true), pausaAoTerminarFrase);
      return;
    }

    if (isDeleting && texto === "") {
      setIsDeleting(false);
      setFraseIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setTexto(
        isDeleting
          ? fraseAtual.substring(0, texto.length - 1)
          : fraseAtual.substring(0, texto.length + 1)
      );
    }, velocidadeDigitacao);

    return () => clearTimeout(timeout);
  }, [texto, isDeleting, fraseIndex, frases]);

  return (
    <section className="litera-section">
      
      {/* ── 1. HERO SECTION: PARALLAX + MÁQUINA DE ESCREVER ── */}
      <div 
        className="hero-parallax-wrapper"
        onMouseMove={handleMouseMove}
      >
        {/* Livros Flutuantes no Fundo */}
        {floatingBooks.map((book, idx) => (
          <div 
            key={idx}
            className="parallax-book shadow-litera-lg"
            style={{
              backgroundColor: book.cor,
              top: book.top,
              left: book.left,
              right: book.right,
              bottom: book.bottom,
              width: book.width,
              height: book.height,
              transform: `rotate(${book.rotate}deg) translate(${mousePos.x * book.speed}px, ${mousePos.y * book.speed}px)`
            }}
          >
            <div className="parallax-book-spine"></div>
          </div>
        ))}

        {/* Conteúdo Central (Textos e Botões) */}
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-center position-relative z-2">
          
          <span className="litera-badge mb-4">O Refúgio das Palavras</span>
          
          <h1 className="typewriter-text mb-4">
            {texto}<span className="typewriter-cursor">|</span>
          </h1>
          
          <p className="litera-lead mx-auto mb-5 opacity-75" style={{maxWidth: '500px'}}>
            Uma biblioteca digital projetada para catalogar leituras, registrar resenhas e preservar os aprendizados de cada página virada.
          </p>

          <div className={`d-flex flex-column flex-sm-row gap-3 justify-content-center fade-in-buttons ${mostrarBotoes ? 'visible' : ''}`}>
            <Link to="/portal-login" className="btn-litera-primary px-4 py-3">
              Explorar o Sistema
            </Link>
            <a href="#bento-features" className="btn-litera-outline px-4 py-3">
              Conhecer os recursos
            </a>
          </div>

        </div>
      </div>

      {/* ── 3. BENTO GRID (Funcionalidades) ─────────────────────── */}
      <div id="bento-features" className="container py-5 my-5 position-relative z-2">
        <div className="text-center mb-5">
          <h2 className="litera-title fs-1">
            Tudo o que você precisa em <span className="litera-title-accent">um só lugar.</span>
          </h2>
        </div>

        <div className="row g-4 bento-grid">
          <div className="col-lg-8">
            <div className="bento-card bento-card-large shadow-litera">
              <div className="bento-content">
                <i className="bi bi-grid-3x3-gap-fill bento-icon"></i>
                <h3 className="bento-title">Acervo Visual Completo</h3>
                <p className="bento-text">
                  Visualize seus livros em uma galeria imersiva. Filtre por autores, busque títulos rapidamente e mantenha o controle exato da sua estante.
                </p>
              </div>
              <div className="bento-visual bento-visual-gallery"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bento-card bento-card-accent shadow-litera">
              <div className="bento-content">
                <i className="bi bi-pie-chart-fill bento-icon text-white"></i>
                <h3 className="bento-title text-white">Métricas Inteligentes</h3>
                <p className="bento-text text-white-50">
                  Acompanhe seu ritmo. Gráficos gerados automaticamente sobre seus gêneros e páginas lidas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="bento-card shadow-litera h-100">
              <div className="bento-content">
                <i className="bi bi-chat-quote-fill bento-icon"></i>
                <h3 className="bento-title">Avaliações e Resenhas</h3>
                <p className="bento-text">
                  Dê notas de 1 a 5 estrelas e registre suas reflexões para não esquecer os detalhes da história.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
             <div className="bento-card shadow-litera h-100 bento-card-dark">
              <div className="bento-content d-flex align-items-center justify-content-between">
                <div>
                  <i className="bi bi-person-badge-fill bento-icon text-white"></i>
                  <h3 className="bento-title text-white">Perfil do Leitor</h3>
                  <p className="bento-text text-white-50 mb-0" style={{maxWidth: '300px'}}>
                    Personalize seu espaço digital e organize seus projetos literários.
                  </p>
                </div>
                <div className="bento-visual-profile d-none d-sm-block">
                  <div className="profile-avatar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. CTA FINAL ────────────────────────────────────────── */}
      <div className="container pb-5 mb-5 position-relative z-2">
        <div className="litera-cta-card shadow-litera">
          <h2 className="litera-cta-title">Pronto para organizar sua estante digital?</h2>
          <p className="litera-cta-text">Junte-se à plataforma e transforme seus hábitos literários.</p>
          <Link to="/portal-login" className="btn-litera-primary px-5 py-3 fs-6">
            Acessar o Sistema <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default LiteraSection;