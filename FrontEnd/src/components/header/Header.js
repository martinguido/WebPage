import React from "react";
import logo from "./IADS.png";

const Header = () => {
  
  return (
    <div className="header">
      <div className="headerDiv">
        <div className="headerTitle">
          <h1 className="headerH1">Instituto Argentino para el Desarrollo Sustentable</h1>
        </div>
        <div className="headerLogo">
          <img src={logo} alt="Logo IADS" className="logoIADS" />
        </div>
      </div>
    </div>
  );
};

export default Header;
