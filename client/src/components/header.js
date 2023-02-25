import React from "react";
import { NavBar } from "./NavBar";
import logo from "../img/logo.png";

export function Header() {
  return (
    <>
      <div>
        <h1>Fundación Arbolar</h1>
      </div>
      <div class="logoHeader">
        <img src={logo} alt="Logo Fundacion Arbolar" class="logoArbolarBlur" />
        <img src={logo} alt="Logo Fundacion Arbolar" class="logoArbolar" />
      </div>
      <NavBar />
    </>
  );
}
