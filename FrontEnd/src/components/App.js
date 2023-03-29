import React from "react";

import Home from "./Home.js";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import Mision from "./Mision.js";
import Testimonios from "./Testimonios.js";
import Aliados from "./Aliados.js";
import Voluntarios from "./Voluntarios.js";
import ConsejosVerdes from "./ConsejosVerdes";
import Donaciones from "./Donaciones.js";
import FAQ from "./FAQ.js";
import Redes from "./Redes.js";
import Contactanos from "./Contactanos.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="topHeader">
        <Header />
        <NavBar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mision" element={<Mision />} />
          <Route path="/Testimonios" element={<Testimonios />} />
          <Route path="/Aliados" element={<Aliados />} />
          <Route path="/Voluntarios" element={<Voluntarios />} />
          <Route path="/ConsejosVerdes" element={<ConsejosVerdes />} />
          <Route path="/Donaciones" element={<Donaciones />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </div>
      <footer>
        <Redes />
      </footer>
    </div>
  );
};

export default App;
