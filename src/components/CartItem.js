import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="CartDisplay__row">
      <div className="row__item">
        <div className="item__column">
          <div className="item__div-img">
            <img
              className="item__img"
              src="./product-1.png"
              alt="product-1"
            ></img>
          </div>
          <div className="item__info">
            <h3 className="item__name">Product Name</h3>
            <p className="item__property">Memoria</p>
            <p className="item__property">Color</p>
            <p className="item__property">Empresa</p>
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
          <span className="counter__amount">3</span>
          <button className="item__counter-btn btn" type="button">
            <img className="cart-item-counter-btn__img" src="./plus.svg" alt="plus"></img>
          </button>
        </div>
        <div className="item__column">
          <span className="item__price">$120000</span>
        </div>
        <div className="item__column">
          <span className="item__price">$360000</span>
        </div>
        <div className="item__column">
          <button className="item__delete-btn" type="button">
            <img
              className="delete-btn__img"
              src="./close-x.svg"
              alt="delete item"
            ></img>
          </button>
        </div>
      </div>
      <hr className="row-division"></hr>
    </div>
  );
};

export default CartItem;
