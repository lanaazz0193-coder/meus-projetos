import './hero.css';

const HeroSection = () => {
  return (
    <section className="position-relative hero-wrapper text-center py-5 overflow-hidden">

      {/* Imagem banner (agora com CSS em vez de inline style) */}     
      <img 
        src="src\assets\imgs\banner-2.jpg"
        alt="Imagem de fundo" 
        className="position-absolute top-0 start-0 w-100 h-100 hero-bg-img"
      />
      
      {/* Overlay para escurecer as bordas e misturar com o fundo */}
      <div className="hero-overlay"></div>

      {/* Conteúdo principal */}
      <div className="container py-5 position-relative z-1">
        <div className="row justify-content-center py-3">
          <div className="col-lg-10 col-xl-8">           
            
            {/* Foto de Perfil (estilizada caso queira usar) */}
            {/* <div className="mb-4">
              <img 
                src="/src/assets/imgs/banner-hero.png" 
                alt="Foto de Ana Souza" 
                className="rounded-circle hero-avatar"
              />
            </div> */}

            {/* ADS | Dev */}
            <div className="d-inline-flex align-items-center gap-2 badge-glass rounded-pill px-3 py-1 mb-4">
              <span className="badge rounded-pill fw-semibold c-darkred f-white shadow-sm">ADS</span>
              <span className="small fw-medium f-lightgray">Dev</span>
              <i className="bi bi-chevron-right small f-red"></i>
            </div>

            {/* Título e subtítulo */}
            <h1 className="display-3 fw-bold lh-sm mb-3 f-ballet f-white hero-title-glow">
              Ana - Souza
            </h1>
            <p className="lead mb-5 fs-5 px-md-3 f-gray">
              Desenvolvedora em constante evolução.
            </p>

            {/* Botão */}
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5">
              <a href="#" className="btn btn-hero-custom px-5 py-3 fw-bold rounded-1 w-75 w-sm-auto">Trabalhe Comigo</a>
            </div>

            {/* Citação Schopenhauer */}
            <div className="pt-4 mt-2">
              <blockquote className="blockquote fs-6 fst-italic f-lightgray">
                "A vida é um pêndulo que oscila entre o sofrimento e o tédio."
              </blockquote>
              <figcaption className="blockquote-footer mt-3 mb-0 f- fw-bold">
                Arthur Schopenhauer
              </figcaption>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;