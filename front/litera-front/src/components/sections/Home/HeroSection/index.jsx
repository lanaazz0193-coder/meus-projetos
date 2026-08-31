const HeroSection = () => {
  return (
    <section className="position-relative bg-dark text-white overflow-hidden d-flex align-items-center" style={{ minHeight: '100vh' }}>
    
      <img src="" className="position-absolute top-0 start-0 w-100 h-100"/>

      <div className="container position-relative z-1 py-5">
        <div className="row">
          <div className="col-lg-8 col-xl-7 text-start">
            
            <div className="d-inline-flex align-items-center mb-4 p-1 pe-3 rounded-pill shadow-lg"
            >
              <span className="badge bg-secondary rounded-pill me-2 px-3 py-2">NOVIDADE</span>
              <span className="text-white-50 small fw-medium">Conheça as novas estatísticas de leitura</span>
            </div>

            <h1 className="display-2 fw-bold mb-4">A sua vida literária<br/>
              <span className="text-secondary">em um só lugar.</span>
            </h1>

            <p className="lead mb-5 fs-4">
              O espaço que você sempre quis. Catalogue suas leituras, publique resenhas e acompanhe seu progresso em uma plataforma desenhada para quem ama ler.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-start gap-3 mb-5">
              <a href="/cadastro" className="btn btn-secondary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg">
                Criar conta gratuitamente
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;