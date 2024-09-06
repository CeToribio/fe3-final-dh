//import React from 'react'
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import "./navBar.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <h2><span>D</span>H Odonto</h2>
      <div className="div-navbar-second-section">
        <div className="div-links">
          <Link to={routes.home} className="nav-link">Home</Link>
          <Link to={routes.contact} className="nav-link">Contacto</Link>
          <Link to={routes.favs} className="nav-link">Favoritos</Link>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
