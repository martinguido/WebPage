import React from "react";
import { SubscribeNewsletter } from "./subscribe_newsletter.js";
import logoFB from "../img/logoFB.png";
import logoTW from "../img/logoTW.png";
import logoLI from "../img/logoLI.png";
import logoIG from "../img/logoIG.png";

export function Footer() {
  return (
    <div>
      <div class="footerdiv networks">
        <h1 class="footerh2">Conectate y Seguinos:</h1>
        <div class="footerlogos">
          <img src={logoFB} alt="Logo de Facebook" class="logo" />
          <img src={logoTW} alt="Logo de Twitter" class="logo" />
          <img src={logoLI} alt="Logo de LinkedIn" class="logo" />
          <img src={logoIG} alt="Logo de Instagram" class="logo" />
        </div>
      </div>
      <SubscribeNewsletter />
    </div>
  );
}
