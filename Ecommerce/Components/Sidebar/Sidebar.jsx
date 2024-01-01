import React, { useContext } from "react";
import Category from "./Category/Category";
import "./Sidebar.css";
import Price from "./Price/Price";

const Sidebar = ({ selectedCategory }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category setSelectedCategory={selectedCategory} />
      </section>
    </>
  );
};

export default Sidebar;
