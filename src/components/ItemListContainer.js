import React from "react";
import "./ItemListContainer.css";
import ItemCard from "./ItemCard";

const ItemListContainer = () => {
  // TODO: Hacer que la cantidad de items y su información salga del JSON de Productos
  return (
    <div className="item-container">
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
  );
};

export default ItemListContainer;
