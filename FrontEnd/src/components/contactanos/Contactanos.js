import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import apiUrl from "../../deploy";

const SuccessAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ErrorAlert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contactanos = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isMailValid, setIsMailValid] = useState(true);
  const [isTextValid, setIsTextValid] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleOpenSuccess = () => {
    setOpenSuccess(true);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };
  const handleOpenError = () => {
    setOpenError(true);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (isNameValid && isMailValid && isTextValid) {
      const data = { name: nombre, mail: mail, request: consulta };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(
          apiUrl + "/api/v1/consultas/enviarConsulta",
          requestOptions
        );
        const data = await response.json();
        console.log(data);
        handleOpenSuccess();
      } catch (error) {
        console.log(error);
        handleOpenError();
      }
    }
  };

  const blurHandlerName = (event) => {
    const nameRegex = /^[a-z ,.'-]+$/i;
    if (nameRegex.test(event.target.value)) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

  const blurHandlerMail = (event) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (emailRegex.test(event.target.value)) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };

  const blurHandlerText = (event) => {
    const textRegex = /^[a-zA-Z\s]*$/;
    if (textRegex.test(event.target.value)) {
      setIsTextValid(true);
    } else {
      setIsTextValid(false);
    }
  };

  return (
    <div className="contactanos">
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <SuccessAlert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Tu consulta ha sido registrada correctamente!
        </SuccessAlert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <ErrorAlert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Hubo un error! Reintenta en unos minutos!
        </ErrorAlert>
      </Snackbar>
      <div className="contactanosDiv">
        <span className="contactanosHeading">Contactanos</span>
        <form className="contactanosForm" onSubmit={submitForm}>
          <label className="contactanosFormLabel" htmlFor="name">
            Nombre:
          </label>
          <div>
            <input
              className="contactanosInput"
              type="text"
              required
              placeholder="Ingrese su nombre..."
              onBlur={blurHandlerName}
              onChange={(event) => setNombre(event.target.value)}
            />
            <span className="inputValidation">
              {isNameValid ? null : "El nombre no es valido"}
            </span>
          </div>
          <label htmlFor="email" className="contactanosFormLabel">
            Email:
          </label>
          <div>
            <input
              className="contactanosInput"
              type="email"
              name="email"
              required
              placeholder="Ingrese su email..."
              onChange={(event) => setMail(event.target.value)}
              onBlur={blurHandlerMail}
            />
            <span className="inputValidation">
              {isMailValid ? " " : "El mail no es valido"}
            </span>
          </div>
          <label htmlFor="message" className="contactanosFormLabel">
            Consulta:
          </label>
          <textarea
            className="contactanosTextArea"
            name="message"
            required
            placeholder="Escribi aca tu consulta..."
            onChange={(event) => setConsulta(event.target.value)}
            onBlur={blurHandlerText}
          ></textarea>
          <span className="inputValidation">
            {isTextValid ? " " : "La consulta no es valida"}
          </span>
          <button className="contactanosButton" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;
