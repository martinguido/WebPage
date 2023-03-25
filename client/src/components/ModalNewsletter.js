import React from "react";

const ModalNewsletter = () => {
  return (
    <div className="subscribe footerdiv">
      <h2 className="subscribe__title">Mantenete en contacto</h2>
      <p className="subscribe__copy">
        Subscribite para obtener la ultima información y noticias!
      </p>
      <div className="form">
        <input
          type="name"
          className="form__name"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="formSecondRow">
        <div className="form2">
          <input
            type="email"
            className="form__email"
            placeholder="Ingresa tu direccion de email"
          />
          <div className="notice">
            <input type="checkbox" />
            <span className="notice__copy">
              Estoy de acuerdo con subscribirme al newsletter mensual.
            </span>
          </div>
          <button className="form__button">Subscribite</button>
        </div>
      </div>
    </div>
  );
};

export default ModalNewsletter;
