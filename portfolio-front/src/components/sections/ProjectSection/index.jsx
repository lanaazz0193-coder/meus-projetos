import { Link } from 'react-router';
import './project.css';

const ProjectSection = () => {
  return (
    <section id="projetos" className="py-5 c-gradient">
      <div className="container py-5">

        {/* Título e parágrafo */}       
        <div className="text-center mb-5 pb-3">
          <span className="fw-bold text-uppercase small mb-2 d-block f-red" style={{ letterSpacing: '2px' }}>
            Meu Portfólio
          </span>
          <h2 className="display-6 fw-bold f-white mb-3">Projetos em Destaque</h2>
          <p className="fs-5 f-gray">Uma seleção dos meus melhores trabalhos e estudos de caso.</p>
        </div>

        {/* --- PROJETO PRINCIPAL --- */}
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
                <span className="badge badge-project rounded-pill px-3 py-2">HTML & CSS</span>
                <span className="badge badge-project rounded-pill px-3 py-2">Laravel</span>
                <span className="badge badge-project rounded-pill px-3 py-2">MySQL</span>
              </div>

              {/* Título e parágrafo */}               
              <h3 className="fw-bold mb-3 f-white display-6">Litera</h3>
              <p className="mb-4 lh-lg f-gray">
                Sistema web para gerenciamento de livros. Criado no curso técnico, o projeto foca em organização, usabilidade e código limpo. Confira o resultado!
              </p>
              
              {/* Botão */}
              <div className="mt-2">
                <Link to="/Litera" className="btn btn-social-custom px-4 py-2 fw-semibold rounded-1 text-uppercase">
                  Ver Projeto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <hr className="hr-darkred" />

        <h4 className="fw-bold mb-5 fs-2 f-white text-center">Outros projetos</h4>
        
        {/* --- GRID DE OUTROS PROJETOS --- */}
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
      </div>
    </section>
  );
};

export default ProjectSection;