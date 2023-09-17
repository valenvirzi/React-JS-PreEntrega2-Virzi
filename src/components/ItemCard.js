import React from "react";
import "./ItemCard.css";

const ItemCard = () => {
  return (
    <div className="card">
      {/* TODO: Hacer que la imagen cambie según cada Objeto Producto (y el color elegido) */}
      <img
        className="card__img"
        src="https://samsungar.vtexassets.com/arquivos/ids/189184-800-auto?width=800&height=auto&aspect=true"
        alt="Product IMG"
      ></img>
      <div className="card__info">
        {/* TODO: Hacer que el nombre cambie según cada Objeto Producto */}
        <h2 className="card-info__name">Samsung Galaxy Z Flip5</h2>
        {/* TODO: Hacer que el nombre del color cambié según el color elegido */}
        <p className="card-info__color">
          Color: <span className="card-info__picked-color">Gris</span>
        </p>
        <form id="card__form" className="card-info__form">
          {/* TODO: Convertir div en componente basado en Array del objeto según su propiedad (color) */}
          <div className="card-info__color-form">
            <input
              name="color"
              form="card__form"
              className="color-form__input"
              id="gray"
              type="radio"
            ></input>
            <label
              form="card__form"
              className="color-form__label"
              for="gray"
            ></label>
            <input
              name="color"
              form="card__form"
              className="color-form__input"
              id="black"
              type="radio"
            ></input>
            <label
              form="card__form"
              className="color-form__label"
              for="black"
            ></label>
          </div>
          {/* TODO: Convertir div en componente basado en Array del objeto según su propiedad (memoria) */}
          <div className="card-info__memory-form">
            <input
              name="memory"
              form="card__form"
              className="memory-form__input"
              id="128gb"
              type="radio"
            ></input>
            <label form="card__form" className="memory-form__label" for="128gb">
              128GB
            </label>
            <input
              name="memory"
              form="card__form"
              className="memory-form__input"
              id="256gb"
              type="radio"
            ></input>
            <label form="card__form" className="memory-form__label" for="256gb">
              256GB
            </label>
          </div>
        </form>
        {/* TODO: Hacer que el precio cambie según las propiedades elegidas (memoria) */}
        <span className="card-info__price">U$D 1.400</span>
        {/* TODO: Convertir el botón Ver Detalle en Link al respectivo producto */}
        <button className="card-info__btn detail-btn" type="button">
          <p className="detail-btn__p">Ver Detalle</p>
        </button>
        {/* TODO: Hacer un contador con los siguientes botones */}
        <div className="card-info__cart-div">
          <div className="cart-div__counter-div">
            <button className="cart-div__counter-btn" type="button">
              <img className="counter-btn__img" src="https://www.svgrepo.com/show/532960/minus.svg" alt="minus"></img>
            </button>
            <span className="counter-div__number">3</span>
            <button className="cart-div__counter-btn" type="button">
              <img className="counter-btn__img" src="https://www.svgrepo.com/show/532994/plus.svg" alt="plus"></img>
            </button>
          </div>
          {/* TODO: Lograr que el botón añada el respectivo producto (y la cantidad elegida del mismo) al Array de confirmación de Carrito */}
          <button className="cart-div__add-btn" type="button">
            <img className="add-btn__img" src="https://www.svgrepo.com/show/533042/cart-plus.svg" alt="Add Cart SVG"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
