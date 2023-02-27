import React from "react";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <nav className="dropDownMenu">
        <ul>
          <li>
            <h1>Home</h1>
          </li>
          <li>
            <h1>Conocenos</h1>
            <ul id="subMenu">
              <li>
                <h1>Mision, Vision y Objetivos</h1>
              </li>
              <li>
                <h1>Notas</h1>
              </li>
              <li>
                <h1>Testimonios</h1>
              </li>
              <li>
                <h1>Padrinos</h1>
              </li>
            </ul>
          </li>
          <li>
            <h1>Actividades</h1>
            <ul id="subMenu">
              <li>
                <h1>Voluntarios</h1>
              </li>
              <li>
                <h1>Consejos Verdes</h1>
              </li>
              <li>
                <h1>Nuestros Logros</h1>
              </li>
            </ul>
          </li>
          <li>
            <h1>Donaciones</h1>
          </li>
          <li>
            <h1>Contactanos</h1>
            <ul id="subMenu">
              <li>
                <h1>Preguntas Frecuentes</h1>
              </li>
              <li>
                <h1>Nuestras Redes</h1>
              </li>
              <li>
                <h1>Dejanos tu Consulta</h1>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
