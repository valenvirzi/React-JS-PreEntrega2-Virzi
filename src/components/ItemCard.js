import React, { useState } from "react";
import "./ItemCard.css";
import products from "../products.json";
import { Link } from "react-router-dom";

const ItemCard = ({
  id,
  img,
  name,
  colorName,
  colorRGB,
  storage,
  price,
  category,
}) => {

  const [counter, setCounter] = useState(0);

  const increment = ()=> {
    setCounter(counter +1)
  }
  const decrement = ()=> {
    setCounter(counter -1)
  }

  return (

      <div className="card">
        {/* TODO: Hacer que la imagen cambie según cada Objeto Producto (y el color elegido) */}
        <img className="card__img" src={img} alt="Product IMG"></img>
        <div className="card__info">
          <h2 className="card-info__name">{name}</h2>
          {/* TODO: Hacer que el nombre del color cambié según el color elegido */}
          <p className="card-info__color">
            Color: <span className="card-info__picked-color">{colorName}</span>
          </p>
          <form id={`card__form${id}`} className="card-info__form">
            <div className="card-info__color-form">
              {products[id].colorName.map((color, index) => (
                <div key={color} className="card-info__color-form">
                  <input
                    value={`${colorName[index]}`}
                    name="color"
                    form={`card__form${id}`}
                    className="color-form__input"
                    id={`${products[id].colorName[index]}${id}`}
                    type="radio"
                  ></input>
                  <label
                    style={{
                      backgroundColor: `rgb(${products[id].colorRGB[index]})`,
                    }}
                    form={`card__form${id}`}
                    className="color-form__label"
                    for={`${products[id].colorName[index]}${id}`}
                  ></label>
                </div>
              ))}
            </div>
            <div className="card-info__memory-form">
              {products[id].storage.map((storage, index) => (
                <div key={storage}>
                  <input
                    data-id={index}
                    name="memory"
                    form={`card__form${id}`}
                    className="memory-form__input"
                    id={`${storage}gb${id}`}
                    type="radio"
                  ></input>
                  <label
                    form={`card__form${id}`}
                    className="memory-form__label"
                    for={`${storage}gb${id}`}
                  >
                    {storage}GB
                  </label>
                </div>
              ))}
            </div>
          </form>
          {/* TODO: Hacer que el precio cambie según las propiedades elegidas (memoria) */}
          <span className="card-info__price">U$D {price}</span>
          <Link to={`/item/${id}`}>
          <button className="card-info__btn detail-btn" type="button">
            <p className="detail-btn__p">Ver Detalle</p>
          </button>
          </Link>
          <div className="card-info__cart-div">
            <div className="cart-div__counter-div">
              <button onClick={decrement} className="cart-div__counter-btn" type="button">
                <img
                  className="counter-btn__img"
                  src="https://www.svgrepo.com/show/532960/minus.svg"
                  alt="minus"
                ></img>
              </button>
              <span className="counter-div__number">{counter}</span>
              <button onClick={increment} className="cart-div__counter-btn" type="button">
                <img
                  className="counter-btn__img"
                  src="https://www.svgrepo.com/show/532994/plus.svg"
                  alt="plus"
                ></img>
              </button>
            </div>
            {/* TODO: Lograr que el botón añada el respectivo producto (y la cantidad elegida del mismo) al Array de confirmación de Carrito */}
            <button className="cart-div__add-btn" type="button">
              <img
                className="add-btn__img"
                src="https://www.svgrepo.com/show/533042/cart-plus.svg"
                alt="Add Cart SVG"
              ></img>
            </button>
          </div>
        </div>
      </div>

  );
};

export default ItemCard;
