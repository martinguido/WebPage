import React, { useState } from "react";

const Contactanos = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isMailValid, setIsMailValid] = useState(true);
  const [isTextValid, setIsTextValid] = useState(true);


  const submitForm = async (event) => {
    event.preventDefault()
    if (isNameValid && isMailValid && isTextValid) {
      const data = { name: nombre, mail: mail, request: consulta, requestDate: new Date() }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
      try {
        const response = await fetch("http://localhost:8080/api/v1/consultas/enviarConsulta", requestOptions);
        const data = await response.json();
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  const blurHandlerName = (event) => {
    const nameRegex = /^[a-z ,.'-]+$/i
    if (nameRegex.test(event.target.value)) {
      setIsNameValid(true);
    }
    else {
      setIsNameValid(false);
    }
  }
  const blurHandlerMail = (event) => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (emailRegex.test(event.target.value)) {
      setIsMailValid(true);
    }
    else {
      setIsMailValid(false);
    }
  }
  const blurHandlerText = (event) => {
    const textRegex = /^[a-zA-Z\s]*$/
    if (textRegex.test(event.target.value)) {
      setIsTextValid(true);
    }
    else {
      setIsTextValid(false);
    }
  }



  return (
    <div className="cForm">
      <div className="contactForm" >
        <span className="heading">Contactanos</span>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Nombre:</label>
          <div>
            <input
              type="text"
              required
              placeholder="Ingrese su nombre..."
              onChange={(event) => setNombre(event.target.value)}
              onBlur={blurHandlerName}
            />
            <span className="inputValidation">{isNameValid ? null : "El nombre no es valido"}</span>
          </div>
          <label htmlFor="email">Email:</label>
          <div>
            <input
              type="email"
              className="email"
              name="email"
              required
              placeholder="Ingrese su email..."
              onChange={(event) => setMail(event.target.value)}
              onBlur={blurHandlerMail}
            />
            <span className="inputValidation">{isMailValid ? " " : "El mail no es valido"}</span>
          </div>
          <label htmlFor="message">Consulta:</label>
          <textarea
            className="message"
            name="message"
            required
            placeholder="Escribi aca tu consulta..."
            onChange={(event) => setConsulta(event.target.value)}
            onBlur={blurHandlerText}
          ></textarea>
          <span className="inputValidation">{isTextValid ? " " : "La consulta no es valida"}</span>
          <button className="cBtnSubmit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;