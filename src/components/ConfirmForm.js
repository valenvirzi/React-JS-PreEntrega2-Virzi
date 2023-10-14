import React from "react";
import "./ConfirmForm.css";

const ConfirmForm = () => {
  const handleSubmit = (e) => {
    e.target.preventDefault();
  };
  const handlePhoneInput = (e) => {
    if (
      isNaN(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "+"
    ) {
      e.preventDefault();
    }
  };
  return (
    <div className="div-confirm">
      <form id="confirmForm" className="confirm-form">
        <div className="confirm-form__div">
          <label for="userName" className="confirm-form__label">
            Ingrese su nombre:
          </label>
          <input
            required
            placeholder="Nombre"
            id="userName"
            form="confirmForm"
            className="confirm-form__input"
            type="text"
          ></input>
        </div>
        <div className="confirm-form__div">
          <label for="userLastname" className="confirm-form__label">
            Ingrese su apellido:
          </label>
          <input
            required
            placeholder="Apellido"
            id="userLastname"
            form="confirmForm"
            className="confirm-form__input"
            type="text"
          ></input>
        </div>
        <div className="confirm-form__div">
          <label for="userPhone" className="confirm-form__label">
            Ingrese su N° de teléfono:
          </label>
          <input
            required
            placeholder="+54 9 1234567890"
            id="userPhone"
            form="confirmForm"
            className="confirm-form__input"
            type="tel"
            onKeyDown={handlePhoneInput}
          ></input>
        </div>
        <div className="confirm-form__div">
          <label for="userMail1" className="confirm-form__label">
            Ingrese su email:
          </label>
          <input
            required
            placeholder="pepe@gmail.com"
            id="userMail1"
            form="confirmForm"
            className="confirm-form__input"
            type="email"
          ></input>
        </div>
        <div className="confirm-form__div">
          <label for="userMail2" className="confirm-form__label">
            Confirme su email:
          </label>
          <input
            required
            placeholder="pepe@gmail.com"
            id="userMail2"
            form="confirmForm"
            className="confirm-form__input"
            type="email"
          ></input>
        </div>
      </form>
      <button
        type="submit"
        form="confirmForm"
        className="bottom-btn confirm-btn"
      >
        <p className="button-confirm__text">Confirmar</p>
      </button>
    </div>
  );
};

export default ConfirmForm;
