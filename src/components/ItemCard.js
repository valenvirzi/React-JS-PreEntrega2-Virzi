import React, { useEffect, useState } from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  //TODO: Solucionar el tema de los useState(s) y lograr que se muestren el Stocky el Precio en base a las características seleccionadas
  const [counter, setCounter] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [storageIndex, setStorageIndex] = useState(0);
  const [stock, setStock] = useState(null);

  useEffect(() => {
    if (product.stock[colorIndex] && product.stock[colorIndex][storageIndex]) {
      setStock(product.stock[colorIndex][storageIndex]);
    }
  }, [colorIndex, storageIndex, product.stock]);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="card">
      {/* TODO: Hacer que la imagen cambie según cada Objeto Producto (y el color elegido) */}
      <img className="card__img" src={product.img[0]} alt="Product IMG"></img>
      <div className="card__info">
        <h2 className="card-info__name">{product.name}</h2>
        {/* TODO: Hacer que el nombre del color cambié según el color elegido */}
        <p className="card-info__color">
          Stock: <span className="card-info__picked-color">{stock}</span>
        </p>
        <form id={`card__form${product.id}`} className="card-info__form">
          <div className="card-info__color-form">
            {product.colorRGB.map((color, index) => (
              <div key={color} className="card-info__color-form">
                <input
                  value={`${product.colorRGB[index]}`}
                  name="color"
                  form={`card__form${product.id}`}
                  className="color-form__input"
                  id={`${product.colorRGB[index]}${product.id}`}
                  type="radio"
                ></input>
                <label
                  onClick={(index) => {
                    setColorIndex(index);
                    console.log(product);
                  }}
                  style={{
                    backgroundColor: `rgb(${product.colorRGB[index]})`,
                  }}
                  form={`card__form${product.id}`}
                  className="color-form__label"
                  for={`${product.colorRGB[index]}${product.id}`}
                ></label>
              </div>
            ))}
          </div>
          <div className="card-info__memory-form">
            {product.storage.map((storage, index) => (
              <div key={storage + index}>
                <input
                  data-id={index}
                  name="memory"
                  form={`card__form${product.id}`}
                  className="memory-form__input"
                  id={`${storage + index}gb${product.id}`}
                  type="radio"
                ></input>
                <label
                  onClick={(index) => {
                    setStorageIndex(index);
                  }}
                  form={`card__form${product.id}`}
                  className="memory-form__label"
                  for={`${storage + index}gb${product.id}`}
                >
                  {storage}GB
                </label>
              </div>
            ))}
          </div>
        </form>
        {/* TODO: Hacer que el precio cambie según las propiedades elegidas (memoria) */}
        <span className="card-info__price">U$D {product.price[0]}</span>
        <Link to={`/item/${product.id}`}>
          <button className="card-info__btn detail-btn" type="button">
            <p className="detail-btn__p">Ver Detalle</p>
          </button>
        </Link>
        <div className="card-info__cart-div">
          <div className="cart-div__counter-div">
            <button
              onClick={decrement}
              className="cart-div__counter-btn"
              type="button"
            >
              <img
                className="counter-btn__img"
                src="https://www.svgrepo.com/show/532960/minus.svg"
                alt="minus"
              ></img>
            </button>
            <span className="counter-div__number">{counter}</span>
            <button
              onClick={increment}
              className="cart-div__counter-btn"
              type="button"
            >
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
