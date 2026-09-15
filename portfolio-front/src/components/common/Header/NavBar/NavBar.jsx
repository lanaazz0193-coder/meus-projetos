import { useEffect, useRef } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router";
import './navbar.css';

const NavBar = () => {
  // 1. Criamos a referência para o nosso dropdown
  const dropdownRef = useRef(null);

  // 2. Usamos o useEffect para monitorar os cliques na tela
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se a referência existir e o clique NÃO for dentro do dropdown, removemos o "open"
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.removeAttribute("open");
      }
    };

    // Adiciona o ouvinte de cliques no documento
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Limpa o ouvinte quando o componente for destruído (boa prática)
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função auxiliar para fechar o menu ao clicar em um link interno
  const fecharDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-navbar-custom py-3 sticky-top shadow-sm">
      <div className="container">

        <Link to="/" className="navbar-brand">
          <img src="src\assets\imgs\logo-branca.png" className="navbar-logo" alt="Logo" />
        </Link>

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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 align-items-center">
            
            <li className="nav-item nav-dropdown-wrapper">
              {/* Adicionamos a ref aqui na tag details */}
              <details className="nav-dropdown" ref={dropdownRef}>
                <summary className="nav-dropdown-toggle">
                  Navegação
                  <i className="bi bi-chevron-down ms-2"></i>
                </summary>
                <div className="nav-dropdown-menu">
                  {/* Adicionamos o onClick para fechar o menu ao escolher uma opção */}
                  <a href="#inicio" className="nav-dropdown-item" onClick={fecharDropdown}>Início</a>
                  <a href="#sobre" className="nav-dropdown-item" onClick={fecharDropdown}>Sobre mim</a>
                  <a href="#projetos" className="nav-dropdown-item" onClick={fecharDropdown}>Projetos</a>
                  <a href="#contato" className="nav-dropdown-item" onClick={fecharDropdown}>Contato</a>
                </div>
              </details>
            </li>
            
            <NavItem title="Litera" to="/Litera" />
          </ul>

          <a href="#contato" className="btn btn-nav-custom px-4 py-2 fw-bold rounded-4 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;