import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-container">
      <h2 className="item-container__h2">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
