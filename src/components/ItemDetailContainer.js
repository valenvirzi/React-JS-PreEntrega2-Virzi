import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foundItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((item) => item.id === id));
      }, 1500);
    });
    foundItem.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div>
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
    </div>
  );
};

export default ItemDetailContainer;
