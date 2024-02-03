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
      <>
        <div className="aliadosLogos">
          <div className="aliadosLogosFirstRow">
            <a
              href="https://www.mercosur.int/"
              // eslint-disable-next-line
              target="_blank" rel="noreferrer"
            >
              <img
                src={aliados1}
                alt="logo de Mercosur"
                className="aliadosLogo"
              />
            </a>
            <a
              href="https://www.giz.de/en/html/index.html"
              // eslint-disable-next-line
              target="_blank" rel="noreferrer"
            >
              <img src={aliados2} alt="logo de GTZ" className="aliadosLogo" />
            </a>
            <a href="https://www.unep.org/es"
              // eslint-disable-next-line
              target="_blank" rel="noreferrer">
              <img src={aliados3} alt="logo de PNUMA" className="aliadosLogo" />
            </a>
          </div>
          <div className="aliadosLogosSecondRow">

            <a href="https://iclei.org/"
              // eslint-disable-next-line
              target="_blank" rel="noreferrer">
              <img src={aliados4} alt="logo de ICLEI" className="aliadosLogo" />
            </a>
            <a
              href="https://www.facebook.com/consumidores.argentinos.9/?locale=es_LA"
              // eslint-disable-next-line
              target="_blank" rel="noreferrer"
            >
              <img
                src={aliados5}
                alt="logo de Consumidores Argentinos"
                className="aliadosLogo"
              />
            </a>
          </div>
        </div>
        <div className="mobileAliados">
          <a href="https://www.mercosur.int/"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer">
            <img
              src={aliados1}
              alt="logo de Mercosur"
              className="aliadosLogo"
            />
          </a>
          <a
            href="https://www.giz.de/en/html/index.html"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer"
          >
            <img src={aliados2} alt="logo de GTZ" className="aliadosLogo" />
          </a>
          <a href="https://www.unep.org/es"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer">
            <img src={aliados3} alt="logo de PNUMA" className="aliadosLogo" />
          </a>
          <a href="https://iclei.org/"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer">
            <img src={aliados4} alt="logo de ICLEI" className="aliadosLogo" />
          </a>
          <a
            href="https://www.facebook.com/consumidores.argentinos.9/?locale=es_LA"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer"
          >
            <img
              src={aliados5}
              alt="logo de Consumidores Argentinos"
              className="aliadosLogo"
            />
          </a>
        </div>
      </>
    </div>
  );
};

export default Aliados;
