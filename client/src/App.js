import React from "react";
import Home from "./components/Home.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import NavBar from "./components/NavBar.js";
import Mision from "./components/Mision.js";
import Notes from "./components/Notes.js";
import Testimonies from "./components/Testimonies.js";
import Godfathers from "./components/Godfathers.js";
import Voluntaries from "./components/Voluntaries.js";
import GreenKnwoledge from "./components/GreenKnowledge.js";
import Goals from "./components/Goals.js";
import Donations from "./components/Donations.js";
import FAQ from "./components/FAQ.js";
import SocialNetworks from "./components/SocialNetworks.js";
import ReachUs from "./components/ReachUs.js";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mision" element={<Mision />} />
          <Route path="/Notas" element={<Notes />} />
          <Route path="/Testimonios" element={<Testimonies />} />
          <Route path="/Padrinos" element={<Godfathers />} />
          <Route path="/Voluntarios" element={<Voluntaries />} />
          <Route path="/ConsejosVerdes" element={<GreenKnwoledge />} />
          <Route path="/Logros" element={<Goals />} />
          <Route path="/Donaciones" element={<Donations />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Redes" element={<SocialNetworks />} />
          <Route path="/Contactanos" element={<ReachUs />} />
        </Routes>
      </div>
    </div>
  );
}
