import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <button class="header__cart-btn menu-btn" type="button">
      <p class="header__cart-price">
        $<span class="header__cart-total">0</span>
      </p>
      <img
        class="header__menu-svg"
        src="./shopping-cart.svg"
        alt="carrito"
      ></img>
      <span class="header__cart-notification">55</span>
    </button>
  );
};

export default CartWidget;
