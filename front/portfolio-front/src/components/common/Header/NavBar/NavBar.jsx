import NavItem from "./NavItem";
import { Link } from "react-router"; // Importado para usar no botão de entrar
import './navbar.css'; // Importando o CSS local

const NavBar = () => {
  return ( 
    <nav className="navbar navbar-expand-md navbar-dark bg-navbar-custom py-3 sticky-top shadow-sm">
      <div className="container">
      
        {/* Usando Link em vez de <a> para navegação interna */}
        <Link to="/" className="navbar-brand">
          <img src="src/assets/imgs/logo-branca.png" className="navbar-logo" alt="Logo" />
        </Link>

        {/* Toggler atualizado */}
        <button 
          className="navbar-toggler navbar-toggler-custom px-2" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavegacao" 
          aria-controls="navbarNavegacao" 
          aria-expanded="false" 
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavegacao">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            <NavItem title="Início" to="/" />
            <NavItem title="Litera" to="/Litera" />
            <NavItem title="Login" to="/Login" />
          </ul>
        
          <Link to="/Login" className="btn btn-nav-custom px-4 py-2 fw-bold rounded-4 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>Entrar</Link>

        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;