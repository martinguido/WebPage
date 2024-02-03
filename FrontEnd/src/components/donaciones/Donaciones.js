import React from "react";
import logoMP from "./img/logoMP.jpg";

const Donaciones = () => {
  return (
    <div className="donaciones">
      <h1 className="donacionesTitle">Donar es fácil y seguro</h1>
      <h2 className="donacionesSubtitle">Sino tenes una cuenta de MercadoPago, podes tocar en la siguiente imagen para crear tu propia cuenta en minutos, sólo con tu DNI!</h2>
      <div className="donacionesDivLogo">
        <a href="https://www.mercadopago.com.ar/hub/registration/landing"
          // eslint-disable-next-line
          target="_blank" rel="noreferrer">
          <img src={logoMP} alt="Logo de Mercado Pago" className="donacionLogo" />
        </a>
      </div>
      <div className="donacionesDivButton">
        <a href="https://link.mercadopago.com.ar/guidomartin7"
          // eslint-disable-next-line
          target="_blank" rel="noreferrer">
          <button className="donacionesButton" type="submit">
            Donar una vez
          </button>
        </a>
        <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084880a270801880b2f50f5005e"
          // eslint-disable-next-line
          target="_blank" rel="noreferrer">
          <button className="donacionesButton" type="submit">
            Donacion mensual
          </button>
        </a>
      </div>
      <h3 className="donacionesText">En IADS integramos MercadoPago para ampliar el alcance y permitir que más personas de la región puedan participar activamente en la ONG, ofreciendo una amplia variedad de métodos de pagos. Podes optar por una donación de una única vez con el monto que vos quieras. También tenes la opción de subscribirte a una donación mensual con el monto que vos quieras. Recorda que podes darla de baja en cualquier momento.</h3>

    </div>
  );
};

export default Donaciones;
