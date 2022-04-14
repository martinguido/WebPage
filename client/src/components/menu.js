import React from "react";

export function Menu2() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo-menu">
          LOGO
        </a>
        <input type="checkbox" id="toggler" />
        <label for="toggler">
          <i className="ri-menu-line"></i>
        </label>

        <div className="menu">
          <ul className="list">
            <li>Inicio</li>
            <li>Conocenos</li>
            <ul>
              <li>Mision, Vision y Objetivo</li>
              <li>Notas</li>
            </ul>
            <li>Campañas</li>
            <ul>
              <li>Consejos Verdes</li>
              <li>Nuestros Logros</li>
            </ul>
            <li>Actividades</li>
            <li>Noticias</li>
            <li>Voluntariado</li>
            <li>Testimonios</li>
            <li>Donaciones</li>
            <li>Contactanos</li>
            <ul>
              <li>Preguntas Frecuentes</li>
              <li>Conocenos en otras redes</li>
              <li>Dejanos tu Consulta</li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
}
export function Menu() {
  return (
    <>
      <div className="menu">
        <nav>
          <ul id="main">
            <li>Home</li>
            <li>About</li>
            <li>
              Skills
              <ul className="drop">
                <div>
                  <li>scss</li>
                  <li>jquery</li>
                  <li>html</li>
                </div>
              </ul>
            </li>
            <li>Contact</li>
            <div id="marker"></div>
          </ul>
        </nav>
      </div>
    </>
  );
}
