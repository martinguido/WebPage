import React, { useEffect, useState } from "react";
import logoLI from "./img/logoLI.png";
import logoFB from "./img/logoFB.png";
import logoGM from "./img/logoMail.png";
import logoWP from "./img/logoWP.png";
import logoIADS from "../navBar/IADS.png";

const Redes = (props) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    function handleScroll() {
      if (
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 100
      ) {
        setShowLogo(true);
      } else if (
        showLogo &&
        window.scrollY + window.innerHeight <
        document.documentElement.scrollHeight - 150
      ) {
        setShowLogo(false);
      }
    }
  }, [showLogo]);

  const handleModal = () => {
    props.setViewModalState(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <footer className="redesFooter">
      <div className={`redesDivEffects ${showLogo ? "show" : ""}`}>
        <img src={logoIADS} alt="Logo IADS" className="redesFooterLogoIADS" />
        <h1 className="redesFooterTitle">Seguinos!</h1>
        <div className="redesLogos">
          <a
            href="https://www.linkedin.com/company/iads---instituto-argentino-para-el-desarrollo-sustentable/about/"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer"
          >
            <img src={logoLI} alt="Logo de LinkedIn" className="redesLogo" />
          </a>
          <a
            href="https://www.facebook.com/IADSADMIN/"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer"
          >
            <img src={logoFB} alt="Logo de Facebook" className="redesLogo" />
          </a>
          <a
            href="mailto: info@iadsargentina.org"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer"
          >
            <img src={logoGM} alt="Logo de Mail" className="redesLogo" />
          </a>
          <a href="https://wa.me/1568837530"
            // eslint-disable-next-line
            target="_blank" rel="noreferrer">
            <img src={logoWP} alt="Logo de Whatsapp" className="redesLogo" />
          </a>
        </div>
        <div className="redesDivButton">
          <button className="redesButton" onClick={() => handleModal()}>
            Quiero subscribirme al Newsletter
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Redes;
