import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container-fluid position-relative d-flex justify-content-between align-items-center">

        {/* Botão Mobile e Links */}
        <div className="d-flex align-items-center" style={{ flex: 1 }}>
          
          {/* Botão de menu */}
          <button 
            className="navbar-toggler me-3" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target=".navbar-collapse" 
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links de navegação */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/">Ínicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium ms-lg-3" to="/Login">Entrar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium ms-lg-3" to="/Dashboard">Dasboard</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <Link className="navbar-brand position-absolute top-50 start-50 translate-middle m-0 fw-bold text-secondary fs-4 z-1" to="/" >Litera</Link>

        {/* Campo de Pesquisa */}
        <div className="d-flex justify-content-end align-items-center" style={{ flex: 1 }}>
          <div className="collapse navbar-collapse justify-content-end">
            
         {/* Formulário */}
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="" aria-label="Search"/>
            <button class="btn btn-outline-secondary" type="submit">Buscar</button>
          </form>
            
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;