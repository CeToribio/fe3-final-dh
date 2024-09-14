//import React from 'react'
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import "./navBar.css";
import { useContextGlobal } from "../../Context/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme ,setTheme }= useContextGlobal();
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      console.log(theme);
    };
   
  return (
    <nav className={`navBar-${theme}`}>
      <h2><span>D</span>H Odonto</h2>
      <div className="div-navbar-second-section">
        <div className="div-links">
          <Link to={routes.home} className={`nav-link-${theme}`}>Home</Link>
          <Link to={routes.contact} className={`nav-link-${theme}`}>Contáctanos</Link>
          <Link to={routes.favs} className={`nav-link-${theme}`}>Favoritos</Link>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} size="lg" className={`theme-icon-${theme}`}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
