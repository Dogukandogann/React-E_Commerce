import React, { useContext } from "react";
import { ProdutcsContext } from "../../Context/ProductsContext";
import Item from "../Item/Item";
import "./PopulerProducts.css";

const PopulerProdutcs = () => {
  const { products } = useContext(ProdutcsContext);

  const highRatedProducts = products.filter((item) => item.rating > 4.6);
  return (
    <div className="populer">
      <h1>Popüler Ürünlerimiz</h1>

      <div className="populer-item">
        {highRatedProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.title}
              description={item.description}
              price={item.price}
              image={item.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopulerProdutcs;
