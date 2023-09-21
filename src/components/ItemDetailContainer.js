import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const foundItem = new Promise((resolve) => {
      setTimeout(() => {
        const data = products.find((item) => item.id === Number(id));
        resolve(data);
      }, 1500);
    });
    foundItem.then((data) => {
      setItem(data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className="detail-container">
      {isLoading ? (
        <p>Cargando...</p>
      ) : item ? (
        <ItemDetail
          id={item.id}
          img={item.img[0]}
          name={item.name}
          colorName={item.colorName[0]}
          colorRGB={item.colorRGB[0]}
          storage={item.storage[0]}
          price={item.price[0]}
          category={item.category}
        />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
