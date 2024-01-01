import React from "react";
import { useContext, useState } from "react";
import { ProdutcsContext } from "../../../Context/ProductsContext";

import "./Category.css";
import { FilterContext } from "../../../Context/FilterContext";

const Category = () => {
  const { products } = useContext(ProdutcsContext);
  const { selectedCategory, handleCategorySelect } = useContext(FilterContext);

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  const categoryItems = categories.map((category, index) => (
    <div key={index}>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          value={category}
          checked={selectedCategory === category}
          onChange={() => handleCategorySelect(category)}
        />
        <span className="checkmark"></span>
        {category}
      </label>
    </div>
  ));

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value=""
            name="test"
            checked={!selectedCategory}
            onChange={() => handleCategorySelect("")}
          />
          <span className="checkmark"></span>All
        </label>
        {categoryItems}
      </div>
    </div>
  );
};

export default Category;
