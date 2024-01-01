import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProdutcsProvider } from "../Context/ProductsContext.jsx";
import FilterProvider from "../Context/FilterContext.jsx";
import CartProvider from "../Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ProdutcsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProdutcsProvider>
    </CartProvider>
  </React.StrictMode>
);
