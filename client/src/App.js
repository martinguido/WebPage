import React from "react";

import Home from "./components/Home.js";
import Header from "./components/Header.js";
import NavBar from "./components/NavBar.js";
import Mision from "./components/Mision.js";
import Testimonios from "./components/Testimonios.js";
import Aliados from "./components/Aliados.js";
import Voluntarios from "./components/Voluntarios.js";
import ConsejosVerdes from "./components/ConsejosVerdes";
import Donaciones from "./components/Donaciones.js";
import FAQ from "./components/FAQ.js";
import Redes from "./components/Redes.js";
import Contactanos from "./components/Contactanos.js";
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
          <Route path="/Redes" element={<Redes />} />
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
