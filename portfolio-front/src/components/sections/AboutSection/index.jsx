import './about.css'; // Importando o CSS local

const AboutSection = () => {
  return (
    <section id="sobre" className="py-5 bg-about-custom">
      <div className="container py-5">

        {/* Imagem pessoal e Textos */}        
        <div className="row align-items-center mb-5 pb-4">
          
          <div className="col-lg-5 mb-5 mb-lg-0">
            {/* O wrapper agora controla toda a mágica e os paddings */}
            <div className="about-img-wrapper">
              <img
                src="src\assets\imgs\foto-pessoal-2.jpg" 
                alt="Minha Foto" 
                className="img-fluid about-img-custom" 
              />
            </div>
          </div>

          {/* Titulo e parágrafo sobre mim */}
          <div className="col-lg-7 ps-lg-5">
            <span className="fw-bold text-uppercase small mb-2 d-block f-red" style={{ letterSpacing: '2px' }}>
              Sobre mim
            </span>
            <h2 className="fw-bold mb-4 text-uppercase f-white display-5">Olá!</h2>
            <p className="fs-5 lh-lg mb-5 f-gray">
              Sou uma jovem desenvolvedora apaixonada por tecnologia e inovação, trilhando os passos finais da minha formação básica e técnica na Escola Estadual Professora Sebastiana de Almeida e Silva. Como estudante do Ensino Médio Técnico Integral, dedico minha rotina ao curso de Desenvolvimento e Análise de Sistemas. É nesse ambiente dinâmico que aprimoro diariamente minhas habilidades analíticas e de programação, sempre com o objetivo de criar aplicações que façam a diferença e iniciar uma carreira de impacto na área de TI.
            </p>
            <a href="#contato" className="btn btn-principal-custom btn-lg px-5 py-3 fw-bold rounded-1 text-uppercase f-white">
              Entrar em Contato
            </a>
          </div>
        </div>

        <hr className="hr-darkred" />

        {/* Tecnologias */}
        <div className="mt-5 pt-5">
          <h3 className="fw-bold text-center mb-5 f-white">Tecnologias que domino</h3>
          
          <div className="row g-4">

            {/* Card 1 - HTML */}
            <div className="col-sm-6 col-lg-3">
              <div className="card tech-card h-100 rounded-4 text-center p-4">
                <div className="card-body p-0">
                  <div className="tech-icon-wrapper mb-4">
                    <img src="https://placehold.co/40/B80A06/ecdec4?text=H5" alt="HTML" className="tech-icon-img" />
                  </div>
                  <h5 className="fw-bold mb-3 f-white">HTML</h5>
                  <p className="small mb-0 f-lightgray">Estrutura de páginas web com semântica.</p>
                </div>
              </div>
            </div>

            {/* Card 2 - CSS */}
            <div className="col-sm-6 col-lg-3">
              <div className="card tech-card h-100 rounded-4 text-center p-4">
                <div className="card-body p-0">
                  <div className="tech-icon-wrapper mb-4">
                    <img src="https://placehold.co/40/B80A06/ecdec4?text=CSS" alt="CSS" className="tech-icon-img" />
                  </div>
                  <h5 className="fw-bold mb-3 f-white">CSS</h5>
                  <p className="small mb-0 f-lightgray">Estilização e layouts responsivos modernos.</p>
                </div>
              </div>
            </div>

            {/* Card 3 - JavaScript */}
            <div className="col-sm-6 col-lg-3">
              <div className="card tech-card h-100 rounded-4 text-center p-4">
                <div className="card-body p-0">
                  <div className="tech-icon-wrapper mb-4">
                    <img src="https://placehold.co/40/B80A06/ecdec4?text=JS" alt="JavaScript" className="tech-icon-img" />
                  </div>
                  <h5 className="fw-bold mb-3 f-white">JavaScript</h5>
                  <p className="small mb-0 f-lightgray">Interatividade e lógica complexa no front-end.</p>
                </div>
              </div>
            </div>

            {/* Card 4 - SQL */}
            <div className="col-sm-6 col-lg-3">
              <div className="card tech-card h-100 rounded-4 text-center p-4">
                <div className="card-body p-0">
                  <div className="tech-icon-wrapper mb-4">
                    <img src="https://placehold.co/40/B80A06/ecdec4?text=DB" alt="SQL" className="tech-icon-img" />
                  </div>
                  <h5 className="fw-bold mb-3 f-white">SQL</h5>
                  <p className="small mb-0 f-lightgray">Modelagem de Banco de Dados e consultas.</p>
                </div>
              </div>
            </div>  

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;