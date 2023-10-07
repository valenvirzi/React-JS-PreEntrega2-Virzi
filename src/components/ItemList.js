import React from "react";
import "./ItemList.css";
import ItemCard from "./ItemCard";

const ItemListContainer = ({ list }) => {
  return (
    <div className="item-container">
      {list.map((item) => (
        <ItemCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
