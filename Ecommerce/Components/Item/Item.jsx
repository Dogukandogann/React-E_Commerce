import React, { useContext, useState } from "react";
import "./Item.css";
import { CartContext } from "../../Context/CartContext";
const Item = (props) => {
  const { addProduct, handleAddProduct, onAdd, onRemove } =
    useContext(CartContext);

  return (
    <div className="item">
      <img src={props.image} alt="" />

      <p className="name">{props.name}</p>
      <p className="desc">{props.description}</p>

      <div className="button">
        <div className="item-price">{props.price} $</div>
        <button onClick={() => onAdd(props)}>+</button>
      </div>
    </div>
  );
};

export default Item;
