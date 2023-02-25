import React from "react";

export function NavBar() {
  return (
    <div className="divMenu">
      <ul className="main">
        <li className="firstTitles">Home</li>
        <li className="firstTitles">
          Conocenos
          <ul className="drop">
            <div>
              <li>Mision, Vision y Objetivos</li>
              <li>Notas</li>
              <li>Testimonios</li>
              <li>Padrinos</li>
            </div>
          </ul>
        </li>
        <li className="firstTitles">
          Actividades
          <ul className="drop">
            <div>
              <li>Voluntariado</li>
              <li>Consejos Verdes</li>
              <li>Nuestros Logros</li>
            </div>
          </ul>
        </li>
        <li className="firstTitles">
          Contactanos
          <ul className="drop">
            <div>
              <li>Preguntas Frecuentes</li>
              <li>Nuestras Redes</li>
              <li>Dejanos Tu Consulta</li>
            </div>
          </ul>
        </li>
        <li className="firstTitles">Donaciones</li>
      </ul>
    </div>
  );
}
