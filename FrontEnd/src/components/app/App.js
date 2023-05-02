import React, { useState } from "react";
import ModalNewsletter from "../modalNewsletter/ModalNewsletter.js"
import Home from "../home/Home.js";
import Header from "../header/Header.js";
import NavBar from "../navBar/NavBar.js";
import Mision from "../mision/Mision.js";
import Testimonios from "../testimonios/Testimonios.js";
import Aliados from "../aliados/Aliados.js";
import Voluntarios from "../voluntarios/Voluntarios.js";
import ConsejosVerdes from "../consejosVerdes/ConsejosVerdes";
import Donaciones from "../donaciones/Donaciones.js";
import FAQ from "../faq/FAQ.js";
import Redes from "../redes/Redes.js";
import Contactanos from "../contactanos/Contactanos.js";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [viewModal, setViewModal] = useState(false);
  return (
    <div>
      {viewModal ? <ModalNewsletter setViewModalState={setViewModal} /> : null}
      <div >
        <Header />
        <header className="appHeader">
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
          <Redes setViewModalState={setViewModal} />
        </footer>
      </div>
    </div>
  );
};

export default App;
