import React from "react";
import "./ItemListContainer.css";
import ItemCard from "./ItemCard";
import products from "../products.json";

const ItemListContainer = () => {
  // TODO: Hacer que la cantidad de items y su información salga del JSON de Productos

  return (
    <div className="item-container">
      {products.map((item) => (
        <ItemCard
          id={item.id}
          img={item.img}
          name={item.name}
          colorName={item.colorName[0]}
          colorRGB={item.colorRGB[0]}
          storage={item.storage[0]}
          price={item.price[0]}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
