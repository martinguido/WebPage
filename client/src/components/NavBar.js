import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav className="dropDownMenu">
        <ul>
          <li>
            <h1>
              <Link to="/" className="links">Home</Link>
            </h1>
          </li>
          <li>
            <h1>Conocenos</h1>
            <ul id="subMenu">
              <li>
                <h1>
                  <Link to="/Mision" className="links">Mision</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/Testimonios" className="links">Testimonios</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/Aliados" className="links">Aliados</Link>
                </h1>
              </li>
            </ul>
          </li>
          <li>
            <h1>Actividades</h1>
            <ul id="subMenu">
              <li>
                <h1>
                  <Link to="/Voluntarios" className="links">Voluntarios</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/ConsejosVerdes" className="links">Consejos Verdes</Link>
                </h1>
              </li>
            </ul>
          </li>
          <li>
            <h1><Link to="/Donaciones" className="links">Donaciones</Link></h1>
          </li>
          <li>
            <h1>Contactanos</h1>
            <ul id="subMenu">
              <li>
                <h1><Link to="/FAQ" className="links">FAQ</Link></h1>
              </li>
              <li>
                <h1><Link to="/Redes" className="links">Redes</Link></h1>
              </li>
              <li>
                <h1><Link to="/Contactanos" className="links">Contactanos</Link></h1>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
