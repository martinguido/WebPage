import React from "react";

import logo from "./IADS.png";

const Header = () => {
  return (
    <div className="header">
      <div className="subHeader">
        <div className="headerTitle">
          <h1>Instituto Argentino para el Desarrollo Sustentable</h1>
        </div>
        <div className="logoHeader">
          {/* <img src={logo} alt="Logo Fundacion Arbolar" className="blurred" /> */}
          <img src={logo} alt="Logo IADS" className="logoIADS" />
        </div>
      </div>
    </div>
  );
};

export default Header;
