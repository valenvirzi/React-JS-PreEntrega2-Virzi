import React, { useEffect, useState } from "react";
import "./CartDisplay.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import { ACTIONS } from "../App";

const CartDisplay = () => {
  const { cartState, dispatch } = useCart();
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const total =
      cartState.cartItems.length > 0
        ? cartState.cartItems.reduce((total, item) => {
            return total + item.product.price * item.quantity;
          }, 0)
        : 0;
    setTotalCost(total);
  }, [cartState.cartItems]);

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
          {cartState.cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </ul>
        <div className="CartDisplay__bottom">
          <div className="bottom__total">
            <h3 className="total__title">
              Total: U$D
              <span className="total__price"> {totalCost}</span>
            </h3>
          </div>
          <div className="bottom__buttons">
            <button
              className="bottom-btn clear-btn"
              onClick={() =>
                dispatch({ type: ACTIONS.CLEAR_CART, payload: [] })
              }
              type="button"
            >
              <img
                className="bottom-btn__img"
                alt="trash-can"
                src="./trash.svg"
              ></img>
              <p className="bottom-btn__p">Limpiar carrito</p>
            </button>
            <Link className="button-link" to={`/confirm-form`}>
              <button className="bottom-btn confirm-btn" type="button">
                <img
                  className="bottom-btn__img"
                  alt="cart-confirm"
                  src="./cart-check.svg"
                ></img>
                <p className="bottom-btn__p">Confirmar compra</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDisplay;
