import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../Components/Navbar/Navbar";
import { ProdutcsContext } from "../Context/ProductsContext";

import MainPage from "../Pages/MainPage";
import Products from "../Pages/Products";
import SideCart from "../Components/SideCart/SideCart";

function App() {
  const { getProducts } = useContext(ProdutcsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SideCart />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
