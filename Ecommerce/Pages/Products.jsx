import React, { useContext, useState } from "react";
import { ProdutcsContext } from "../Context/ProductsContext";
import Item from "../Components/Item/Item";
import "./Css/Products.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import { FilterContext } from "../Context/FilterContext";
import Sort from "../Components/Sidebar/Category/Sort";

const Products = () => {
  const { products } = useContext(ProdutcsContext);
  const { selectedCategory, handleCategorySelect } = useContext(FilterContext);

  return (
    <>
      <Sidebar />
      <div className="sort-container">
        <div className="sort">
          <Sort />
        </div>
      </div>

      <div className="shop-category">
        <div className="shopcategory-products">
          {products
            .filter(
              (item) =>
                selectedCategory === "" || item.category === selectedCategory
            )

            .map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.title}
                description={item.description}
                price={item.price}
                image={item.thumbnail}
              />
            ))}
          {console.log(selectedCategory)}
        </div>
      </div>
    </>
  );
};

export default Products;
