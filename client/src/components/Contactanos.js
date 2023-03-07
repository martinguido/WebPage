import React from "react";

const Contactanos = () => {
  return (
    <div className="cForm">
      <div className="contactForm">
        <span className="heading">Contact Us</span>
        <form>
          <label for="name">Nombre:</label>
          <input type="text" required="" placeholder="Ingrese su nombre..." />
          <label for="email">Email:</label>
          <input
            type="email"
            className="email"
            name="email"
            required=""
            placeholder="Ingrese su email..."
          />
          <label for="message">Consulta:</label>
          <textarea
            className="message"
            name="message"
            required=""
            placeholder="Escribi aca tu consulta..."
          ></textarea>
          <button className="cBtnSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;
