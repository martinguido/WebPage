import React from "react";

export function SubscribeNewsletter() {
  return (
    <>
      <div class="subscribe footerdiv">
        <h2 class="subscribe__title">Mantenete en contacto</h2>
        <p class="subscribe__copy">
          Subscribite para obtener la ultima información y noticias!
        </p>
        <div class="form">
          <input
            type="name"
            class="form__name"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div class="formSecondRow">
          <div class="form2">
            <input
              type="email"
              class="form__email"
              placeholder="Ingresa tu direccion de email"
            />
            <div class="notice">
              <input type="checkbox" />
              <span class="notice__copy">
                Estoy de acuerdo con subscribirme al newsletter mensual.
              </span>
            </div>
            <button class="form__button">Subscribite</button>
          </div>
        </div>
      </div>
    </>
  );
}
