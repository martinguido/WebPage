import React, { useState } from "react";

const Contactanos = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [consulta, setConsulta] = useState("");

  const postData = () => {
    try {
      const data = { name: nombre, mail: mail, request: consulta, date: new Date() }
    }
    catch {

    }

  }

  return (
    <div className="cForm">
      <div className="contactForm" onSubmit={postData}>
        <span className="heading">Contact Us</span>
        <form >
          <label for="name">Nombre:</label>
          <input
            type="text"
            required=""
            placeholder="Ingrese su nombre..."
            onChange={(event) => setNombre(event.target.value)}
          />
          <label for="email">Email:</label>
          <input
            type="email"
            className="email"
            name="email"
            required=""
            placeholder="Ingrese su email..."
            onChange={(event) => setMail(event.target.value)}
          />
          <label for="message">Consulta:</label>
          <textarea
            className="message"
            name="message"
            required=""
            placeholder="Escribi aca tu consulta..."
            onChange={(event) => setConsulta(event.target.value)}
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
