import React from "react";
import Consultas from "../consultas/Consultas.js";
import NavBar from "../navBar/NavBar.js";
import Subscriptores from "../subscriptores/Subscriptores.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="appHeader">
        <NavBar />
      </header>
      <div>
        <Routes>
          <Route path="/Subscriptores" element={<Subscriptores />} />
          <Route path="/Consultas" element={<Consultas />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
