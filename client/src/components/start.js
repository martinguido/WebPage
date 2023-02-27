import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import SubscribeNewsletter from "./SubscribeNewsletter.js";
import NavBar from "./NavBar.js";

export default function Start() {
  return (
    <div className="start">
      <Header />
      <NavBar />
      <Footer />
      <SubscribeNewsletter />
    </div>
  );
}
