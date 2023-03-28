import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav className="dropDownMenu">
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <h1 className="mainH1">Conocenos</h1>
            <ul id="subMenu">
              <li>
                <Link to="/Mision" className="links">
                  Mision
                </Link>
              </li>
              <li>
                <Link to="/Testimonios" className="links">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/Aliados" className="links">
                  Aliados
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="mainH1">Actividades</h1>
            <ul id="subMenu">
              <li>
                <Link to="/Voluntarios" className="links">
                  Voluntarios
                </Link>
              </li>
              <li>
                <Link to="/ConsejosVerdes" className="links">
                  Consejos Verdes
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Donaciones" className="links">
              Donaciones
            </Link>
          </li>
          <li>
            <h1 className="mainH1">Contactanos</h1>
            <ul id="subMenu">
              <li>
                <Link to="/FAQ" className="links">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/Redes" className="links">
                  Redes
                </Link>
              </li>
              <li>
                <Link to="/Contactanos" className="links">
                  Contactanos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
