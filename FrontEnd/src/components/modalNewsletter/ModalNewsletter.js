import React, { useState } from "react";
import closeIcon from "./closeIcon.png";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import apiUrl from "../../deploy";

const SuccessAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ErrorAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ModalNewsletter = (props) => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isMailValid, setIsMailValid] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleOpenSuccess = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };
  const handleOpenError = () => {
    setOpenError(true);
  };
  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const submitForm = async (event) => {
    event.preventDefault()
    if (isNameValid && isMailValid) {
      const data = { name: nombre, mail: mail}
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
      try {
        const response = await fetch(apiUrl + "/api/v1/subscriptores/subscribirse", requestOptions);
        const data = await response.json();
        console.log(data);
        setTimeout(() => {
          closeModal();
        }, 2000);
        handleOpenSuccess();
      }
      catch (error) {
        console.log(error);
        handleOpenError();
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
    props.setViewModalState(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <SuccessAlert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          Te subscribiste correctamente!
        </SuccessAlert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <ErrorAlert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Hubo un error! Reintenta en unos minutos!
        </ErrorAlert>
      </Snackbar>
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
              <button className="form__button" onClick={(event) => submitForm(event)}>Subscribirme</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewsletter;
