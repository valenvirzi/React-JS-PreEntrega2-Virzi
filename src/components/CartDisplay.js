import React from "react";
import "./CartDisplay.css";
import CartItem from "./CartItem";

const CartDisplay = () => {
  return (
    // TODO: Hacer un condicional ternario para mostrar un mensaje si el carrito está vacío o mostrar el carrito en caso de que haya productos en él.
    <section className="CartDisplay">
      <h2 className="CartDisplay__title">Tu carrito de compras</h2>
      <div className="CartDisplay__products">
        <div className="products__title-row">
          <div className="titles-row">
            <h4 className="column-title">Producto</h4>
            <h4 className="column-title">Cantidad</h4>
            <h4 className="column-title">Precio Un.</h4>
            <h4 className="column-title">Subtotal</h4>
          </div>
          <hr className="row-division"></hr>
        </div>
        <ul className="CartDisplay__list">
          <CartItem />
          <CartItem />
        </ul>
        <div className="CartDisplay__bottom">
          <div className="bottom__total">
            <h3 className="total__title">
              Total: $<span className="total__price">720000</span>
            </h3>
          </div>
          <div className="bottom__buttons">
            <button className="bottom-btn clear-btn" type="button">
              <img
                className="bottom-btn__img"
                alt="trash-can"
                src="./trash.svg"
              ></img>
              <p className="bottom-btn__p">Limpiar carrito</p>
            </button>
            <button className="bottom-btn confirm-btn" type="button">
              <img
                className="bottom-btn__img"
                alt="cart-confirm"
                src="./cart-check.svg"
              ></img>
              <p className="bottom-btn__p">Confirmar compra</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDisplay;
