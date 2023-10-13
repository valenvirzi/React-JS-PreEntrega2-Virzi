import React from "react";
import "./CartItem.css";
import { useCart } from "../context/CartContext";
import { ACTIONS } from "../App";

const CartItem = ({ product, modeIndex }) => {
  const { cartState, dispatch } = useCart();

  const removeItem = (product) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: product.id });
  };
  return (
    <li className="CartDisplay__row">
      <div className="row__item">
        <div className="item__column">
          <div className="item__div-img">
            <img
              className="item__img"
              src={product.img[modeIndex.color]}
              alt="product-1"
            ></img>
          </div>
          <div className="item__info">
            <h3 className="item__name">{product.name}</h3>
            <p className="item__property">
              {product.storage[modeIndex.storage]}GB
            </p>
            <p className="item__property">
              Stock: {product.stock[modeIndex.color][modeIndex.storage]}u.
            </p>
          </div>
        </div>
        <div className="item__column">
          <button className="item__counter-btn btn" type="button">
            <img
              className="cart-item-counter-btn__img"
              src="./minus.svg"
              alt="minus"
            ></img>
          </button>
          <span className="counter__amount">{/* {product.quantity} */}</span>
          <button className="item__counter-btn btn" type="button">
            <img
              className="cart-item-counter-btn__img"
              src="./plus.svg"
              alt="plus"
            ></img>
          </button>
        </div>
        <div className="item__column">
          <span className="item__price">
            {product.price[modeIndex.storage]} U$D
          </span>
        </div>
        <div className="item__column">
          <span className="item__price">
            {/* {product.quantity * (product.price[modeIndex.storage]}) */}
          </span>
        </div>
        <div className="item__column">
          <button
            className="item__delete-btn"
            onClick={removeItem}
            type="button"
          >
            <img
              className="delete-btn__img"
              src="./close-x.svg"
              alt="delete item"
            ></img>
          </button>
        </div>
      </div>
      <hr className="row-division"></hr>
    </li>
  );
};

export default CartItem;
