import React, { useState } from "react";
import closeIcon from "./closeIcon.png";
import Alert from 'react-bootstrap/Alert';

const ModalNewsletter = (props) => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isMailValid, setIsMailValid] = useState(true);
  const [showCorrectAlert, setShowCorrectAlert] = useState(false);
  const [showIncorrectAlert, setShowIncorrectAlert] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault()
    if (isNameValid && isMailValid) {
      const data = { name: nombre, mail: mail, subscriptionDate: new Date() }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
      try {
        const response = await fetch("http://localhost:8080/api/v1/subscriptores/subscribirse", requestOptions);
        const data = await response.json();
        console.log(data);
        setShowCorrectAlert(true);
        setTimeout(() => {
          setShowCorrectAlert(false);
       }, 5000);

      }
      catch (error) {
        console.log(error);
        setShowIncorrectAlert(true);
        setTimeout(() => {
          setShowIncorrectAlert(false);
       }, 5000);

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

  const closeModal = () => {
    console.log("CERRANDO MODAL");
    props.setViewModalState(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      { showCorrectAlert ?  <Alert variant="outlined" severity="error" onClose={() => { }}>Subscripto al Newsletter exitosamente!</Alert> : null}
      { showIncorrectAlert ?  <Alert variant="outlined" severity="success" onClose={() => { }}>Lo sentimos, hubo un error! Volve a intentarlo.</Alert> : null}
      <div className="newsletter">
        <div>
          <div className="subscribe">
            <div className="newsHeader">
              <img className="closeIcon" src={closeIcon} alt="CloseIcon" onClick={() => closeModal()} />
            </div>
            <div className="titles">
              <h2 className="subscribe__title">Mantenete en contacto!</h2>
              <p className="subscribe__copy">
                Subscribite para obtener la ultima información y noticias!
              </p>
            </div>
            <div className="form">
              <div className="formFirstRow">
                <input
                  type="name"
                  className="form__name"
                  placeholder="Ingresa tu nombre"
                  required
                  onChange={(event) => setNombre(event.target.value)}
                  onBlur={blurHandlerName}
                />
                <span className="subscribeValid">{isNameValid ? null : "El nombre no es valido"}</span>
              </div>
              <div className="formSecondRow">
                <input
                  type="email"
                  className="form__email"
                  placeholder="Ingresa tu direccion de email"
                  required
                  onChange={(event) => setMail(event.target.value)}
                  onBlur={blurHandlerMail}
                />
                <span className="subscribeValid">{isMailValid ? " " : "El mail no es valido"}</span>
              </div>
            </div>
            <div className="button">
              <button className="form__button" onClick={() => submitForm()}>Subscribirme</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewsletter;
