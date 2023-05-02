import React from "react";
import aliados1 from "./img/aliados1.jpeg";
import aliados2 from "./img/aliados2.jpeg";
import aliados3 from "./img/aliados3.jpeg";
import aliados4 from "./img/aliados4.jpeg";
import aliados5 from "./img/aliados5.jpeg";

const Aliados = () => {

  return (
    <div className="aliadosDiv">
      <h1 className="aliadosTitle">Cooperamos con:</h1>
      <div className="aliadosLogos">
        <div className="aliadosLogosFirstRow">
          <a href="https://www.mercosur.int/" target="_blank" rel="noreferrer">
            <img src={aliados1} alt="logo de Mercosur" className="aliadosLogo" />
          </a>
          <a href="https://www.colnodo.apc.org/es/organizaciones-aliadas/cooperacion-tecnica-alemana-gtz" target="_blank" rel="noreferrer">
            <img src={aliados2} alt="logo de GTZ" className="aliadosLogo" />
          </a>
          <a href="http://www.pnuma.org/sociedad_civil/grupos_principales.php" target="_blank" rel="noreferrer">
            <img src={aliados3} alt="logo de PNUMA" className="aliadosLogo" />
          </a>
        </div>
        <div className="aliadosLogosSecondRow">
          <a href="https://iclei.org/" target="_blank" rel="noreferrer">
            <img src={aliados4} alt="logo de ICLEI" className="aliadosLogo" />
          </a>
          <a href="https://consumidoresarg.org.ar/" target="_blank" rel="noreferrer">
            <img src={aliados5} alt="logo de Consumidores Argentinos" className="aliadosLogo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aliados;
