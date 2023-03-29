import React from "react";
import logoFB from "../img/logoFB.png";
import logoTW from "../img/logoTW.png";
import logoLI from "../img/logoLI.png";
import logoIG from "../img/logoIG.png";

const Redes = () => {
  return (
    <div className="footer">
      <h1 className="footerTitle">Conectate y Seguinos:</h1>
      <div className="footerlogos">
        <img src={logoFB} alt="Logo de Facebook" className="logo" />
        <img src={logoTW} alt="Logo de Twitter" className="logo" />
        <img src={logoLI} alt="Logo de LinkedIn" className="logo" />
        <img src={logoIG} alt="Logo de Instagram" className="logo" />
      </div>
    </div>
  );
};

export default Redes;
