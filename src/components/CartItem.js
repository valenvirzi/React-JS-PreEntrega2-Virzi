import React from "react";
import "./CartItem.css";
import { useCart } from "../context/CartContext";
import { ACTIONS } from "../App";

const CartItem = ({ product, quantity }) => {
  const { dispatch } = useCart();

  const removeItem = () => {
    console.log("dispatch-remove");
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: product.id,
    });
  };

  return (
    <li className="CartDisplay__row">
      <div className="row__item">
        <div className="item__column">
          <div className="item__div-img">
            <img className="item__img" src={product.img} alt="product-1"></img>
          </div>
          <div className="item__info">
            <h3 className="item__name">{product.name}</h3>
            <p className="item__property">Stock: {product.stock}u.</p>
          </div>
        </div>
        <div className="item__column">
          <span className="counter__amount">{quantity}</span>
        </div>
        <div className="item__column">
          <span className="item__price">{product.price} U$D</span>
        </div>
        <div className="item__column">
          <span className="item__price">{quantity * product.price} U$D</span>
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
