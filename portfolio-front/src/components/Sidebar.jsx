import { NavLink } from "react-router"; // ou "react-router-dom" dependendo da sua versão
import './sidebar.css';

const navItems = [
  { to: "/litera-app/dashboard",     label: "Dashboard",       icon: "bi-speedometer2" },
  { to: "/litera-app/catalogo",      label: "Catálogo",        icon: "bi-book" },
  { to: "/litera-app/relatorios",    label: "Relatórios",      icon: "bi-bar-chart-line" },
  { to: "/litera-app/configuracoes", label: "Configurações",   icon: "bi-gear" }, 
];

const SideBar = () => {
  return (
    <aside className="sidebar">

      {/* ── Logo ─────────────────────────────────────── */}
      <div className="sidebar-brand">
        <i className="bi bi-book-half sidebar-brand-icon f-red"></i>
        <span className="sidebar-brand-name">
          Lite<span>ra</span>
        </span>
      </div>

      {/* ── Navegação ────────────────────────────────── */}
      <nav className="sidebar-nav">

        <span className="sidebar-label">Menu</span>

        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link${isActive ? " active" : ""}`
            }
          >
            <i className={`bi ${icon}`}></i>
            {label}
          </NavLink>
        ))}

      </nav>

      {/* ── Rodapé ───────────────────────────────────── */}
      <div className="sidebar-footer">
        <NavLink to="/" className="sidebar-logout">
          <i className="bi bi-box-arrow-left"></i>
          Sair do sistema
        </NavLink>
      </div>

    </aside>
  );
};

export default SideBar;