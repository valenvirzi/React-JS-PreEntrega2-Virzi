import React, { useEffect, useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  //TODO: Solucionar el tema de los useState(s) y lograr que se muestren el Stock y el Precio en base a las características seleccionadas
  const [counter, setCounter] = useState(1);
  const [modeIndex, setModeIndex] = useState({ color: 0, storage: 0 });
  const [stock, setStock] = useState(0);

  function getNestedStockValue(product, modeIndex) {
    if (
      product &&
      product.stock &&
      Array.isArray(product.stock[modeIndex.color]) &&
      Array.isArray(product.stock[modeIndex.storage])
    ) {
      return product.stock[modeIndex.color][modeIndex.storage];
    }
    // Valor por Default
    return 0;
  }

  useEffect(() => {
    setStock(getNestedStockValue(product, modeIndex));
    ///TODO: en lugar de llamar al cambio de stock ya cambiando el stock (linea 66) llamar al useEffect cuando un evento ocurra (en tu caso al seleccionar un color o una etiqueta storage).
    // el evento reemplaza a "modelIndex" que dispara al useEffect porq ya estoy haciendo un setStock al pedo porq es el trabajo del useEffect
  }, [modeIndex, product]);

  useEffect(() => {
    if (counter > stock) {
      setCounter(stock);
    }
  }, [stock]);

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
      {/* TODO: Hacer que la imagen cambie según cada Objeto Producto (y el color elegido) */}
      <img className="detail__img" src={product.img[modeIndex.color]} alt="Product IMG"></img>
      <div className="detail__info">
        <h2 className="detail-info__name">{product.name}</h2>
        {/* TODO: Hacer que el nombre del color cambié según el color elegido */}
        <p className="detail-info__color">
          Stock: <span className="detail-info__picked-color">{stock}</span>
        </p>
        <form id={`detail__form${product.id}`} className="detail-info__form">
          <div className="detail-info__color-form">
            {product.colorRGB.map((color, index) => (
              <div key={color} className="detail-info__color-form">
                <input
                  value={`${product.colorRGB[index]}`}
                  name="color"
                  form={`detail__form${product.id}`}
                  className="color-form__input"
                  id={`${product.colorRGB[index]}${product.id}`}
                  type="radio"
                ></input>
                <label
                  onClick={(event) => {
                    setModeIndex((prevModel) => {
                      return { ...prevModel, color: index };
                    });
                  }}
                  style={{
                    backgroundColor: `rgb(${product.colorRGB[index]})`,
                  }}
                  form={`detail__form${product.id}`}
                  className="color-form__label"
                  for={`${product.colorRGB[index]}${product.id}`}
                ></label>
              </div>
            ))}
          </div>
          <div className="detail-info__memory-form">
            {product.storage.map((storage, index) => (
              <div key={index}>
                <input
                  data-id={index}
                  name="memory"
                  form={`detail__form${product.id}`}
                  className="memory-form__input"
                  id={`${index}gb${product.id}`}
                  type="radio"
                ></input>
                <label
                  onClick={(event) => {
                    setModeIndex((prevModel) => {
                      return { ...prevModel, storage: index };
                    });
                  }}
                  form={`detail__form${product.id}`}
                  className="memory-form__label"
                  for={`${index}gb${product.id}`}
                >
                  {storage}GB
                </label>
              </div>
            ))}
          </div>
        </form>
        {/* TODO: Hacer que el precio cambie según las propiedades elegidas (memoria) */}
        <span className="detail-info__price">U$D {product.price[modeIndex.storage]}</span>
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
            <span className="d-counter-div__number">{counter}</span>
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