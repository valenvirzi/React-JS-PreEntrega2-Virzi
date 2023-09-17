import React from "react";

const CartDisplay = () => {
  return (
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
        <div className="CartDisplay__row">
          <div className="row__item">
            <div className="item__column">
              <div className="item__div-img">
                <img className="item__img" src="./product-1.png" alt="product-1"></img>
              </div>
              <div className="item__info">
                <h3 className="item__name">Product Name</h3>
                <p className="item__property">Memoria</p>
                <p className="item__property">Color</p>
                <p className="item__property">Empresa</p>
              </div>
            </div>
            <div className="item__column">
              <button className="item__counter-btn" type="button">
                <img className="counter-btn__img" src="./" alt="minus"></img>
              </button>
              <span>3</span>
              <button className="item__counter-btn" type="button">
                <img className="counter-btn__img" src="./" alt="plus"></img>
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
                <img className="delete-btn__img" src="./" alt="delete item"></img>
              </button>
            </div>
          </div>
          <hr className="row-division"></hr>
        </div>
      </div>
    </section>
  );
};

export default CartDisplay;
