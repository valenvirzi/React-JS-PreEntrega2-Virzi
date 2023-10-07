import React from "react";
import "./ItemList.css";
import ItemCard from "./ItemCard";

const ItemListContainer = ({ list }) => {
  return (
    <div className="item-container">
      {list.map((item) => (
        <div key={item.id}>
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
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
