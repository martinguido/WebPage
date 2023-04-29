import React from "react";
import logoLI from "./logoLI.png";
import logoFB from "./logoFB.png";
import logoGM from "./logoGM.png";
import logoWP from "./logoWP.png";

const Redes = () => {
  return (
    <div className="footer">
      <h1 className="footerTitle">Seguinos!</h1>
      <div className="footerlogos">
        <a href="https://www.linkedin.com/company/iads---instituto-argentino-para-el-desarrollo-sustentable/about/" target="_blank" rel="noreferrer">
          <img src={logoLI} alt="Logo de LinkedIn" className="logo" />
        </a>
        <a href="https://www.facebook.com/IADSADMIN/" target="_blank" rel="noreferrer">
          <img src={logoFB} alt="Logo de Facebook" className="logo" />
        </a>
        <a href="mailto: info@iadsargentina.org" target="_blank" rel="noreferrer">
          <img src={logoGM} alt="Logo de Mail" className="logo" />
        </a>
        <a href="https://wa.me/1568837530" target="_blank" rel="noreferrer">
          <img src={logoWP} alt="Logo de Whatsapp" className="logo" />
        </a >
      </div >
    </div >
  );
};

export default Redes;
