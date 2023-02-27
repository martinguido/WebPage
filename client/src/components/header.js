import React from "react";

import logo from "../img/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Fundación Arbolar</h1>
      </div>
      <div className="logoHeader">
        <img src={logo} alt="Logo Fundacion Arbolar" className="blurred" />
        <img src={logo} alt="Logo Fundacion Arbolar" className="logoA" />
      </div>
    </div>
  );
}
