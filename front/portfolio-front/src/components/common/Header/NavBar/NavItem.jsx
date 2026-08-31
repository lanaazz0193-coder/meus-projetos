import { Link } from "react-router";

const NavItem = ({ title, to = "/" }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link nav-link-custom" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;