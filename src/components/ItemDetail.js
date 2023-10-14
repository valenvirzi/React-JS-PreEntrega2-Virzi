import React, { useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="detail">
      <img className="detail__img" src={product.img} alt="Product IMG"></img>
      <div className="detail__info">
        <h2 className="detail-info__name">{product.name}</h2>
        <p className="detail-info__color">
          Stock:
          <span className="detail-info__picked-color">{product.stock}</span>
        </p>
        <p>{product.desc}</p>
        <span className="detail-info__price">U$D {product.price}</span>
        <div className="detail-info__cart-div">
          <div className="d-cart-div__counter-div">
            <button
              onClick={decrement}
              className="d-cart-div__counter-btn"
              type="button"
            >
              <img
                className="d-counter-btn__img"
                src="https://www.svgrepo.com/show/532960/minus.svg"
                alt="minus"
              ></img>
            </button>
            <span className="d-counter-div__number">
              {counter > 0 ? counter : setCounter(1)}
            </span>
            <button
              onClick={increment}
              className="d-cart-div__counter-btn"
              type="button"
            >
              <img
                className="d-counter-btn__img"
                src="https://www.svgrepo.com/show/532994/plus.svg"
                alt="plus"
              ></img>
            </button>
          </div>
          {/* TODO: Lograr que el botón añada el respectivo producto (y la cantidad elegida del mismo) al Array de confirmación de Carrito */}
          <button className="d-cart-div__add-btn" type="button">
            <img
              className="d-add-btn__img"
              src="https://www.svgrepo.com/show/533042/cart-plus.svg"
              alt="Add Cart SVG"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
