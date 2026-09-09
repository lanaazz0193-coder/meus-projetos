import { Link } from "react-router";
import './footer.css'; // Importando o CSS local

const Footer = () => {
  return (
    <footer className="bg-footer-custom">
      
      {/* Seção superior (mantida da sua estrutura original) */}
      <div className="container py-2 footer-divider">
        <div className="row align-items-center py-4">
          <div>
            <h2 className="fw-bold display-6 f-white"></h2>
            <p className="mb-0 fs-5 f-gray"></p>
          </div>
        </div>
      </div>

      <div className="container footer-spacing">
        <div className="row gy-5 py-4">
          
          {/* Coluna 1: Nome e Biografia */}
          <div className="col-lg-8">
            
            {/* O d-flex flex-column coloca a logo em cima e o nome embaixo */}
            <Link to="/" className="text-decoration-none d-flex flex-column align-items-start mb-4">
              
              {/* Logo */}
              <img src="src\assets\imgs\logo-branca.png" alt="Logo da Ana" className="footer-logo mb-3" />
              

              <span className="fs-2 fw-bold f-white">Ana Lívia de Souza</span>
            </Link>
            
            <p className="mb-4 lh-lg f-gray f-p bio-text">
              Desenvolvedora de Sistemas e futura pesquisadora ambiental.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5 className="fw-bold mb-4 text-uppercase footer-heading f-white">Navegação</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li><Link to="/" className="text-decoration-none link-footer">Início</Link></li>
              <li><Link to="/" className="text-decoration-none link-footer">Portfolio</Link></li>
              <li><Link to="/" className="text-decoration-none link-footer">Contato</Link></li>
              <li><Link to="/Login" className="text-decoration-none link-footer">Login</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Fale Conosco */}
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-4 text-uppercase footer-heading f-white">Fale Conosco</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 f-gray f-pp">
              
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-geo-alt f-red fs-5 mt-1"></i>
                <span>BR 381, 182 - Lagoa do Pau<br/>Jaguaraçu, MG - 35188-000</span>
              </li>
              
              <li className="d-flex align-items-center gap-3">
                <i className="bi bi-telephone f-red fs-5"></i>
                <span>+55 (31) 99818-9971</span>
              </li>
              
              <li className="d-flex align-items-center gap-3">
                <i className="bi bi-envelope f-red fs-5"></i>
                <span>lanaazz0193@gmail.com</span>
              </li>
              
            </ul>
          </div>

        </div>
      </div>

      {/* Seção Inferior: Copyright */}
      <div className="py-4 footer-bottom">
        <div className="text-center">
          <p className="mb-0 f-gray f-pp">
            &copy; 2026 Portfolio da Ana. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;