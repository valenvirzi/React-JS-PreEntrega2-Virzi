import React, { useState } from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";
import { ACTIONS } from "../App";
import { useCart } from "../context/CartContext";

const ItemCard = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const { dispatch } = useCart;

  const addToCart = () => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { product, counter },
    });
  };

  const increment = () => {
    if (counter < product.stock) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="card">
      <img className="card__img" src={product.img} alt="Product IMG"></img>
      <div className="card__info">
        <h2 className="card-info__name">{product.name}</h2>
        <p className="card-info__color">
          Stock:
          <span className="card-info__picked-color">{product.stock}</span>
        </p>
        <span className="card-info__price">U$D {product.price}</span>
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
            <span className="counter-div__number">
              {counter > 0 ? counter : setCounter(1)}
            </span>
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
          <button
            className="cart-div__add-btn"
            onClick={addToCart}
            type="button"
          >
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
