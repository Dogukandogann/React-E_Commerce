import { createContext, useState } from "react";
import axios from "axios";

export const ProdutcsContext = createContext();

export const ProdutcsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response);

      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("There was an error while fetching the products");
    }
  };

  const sharedValuesAndMethods = {
    products,
    getProducts,
  };
  return (
    <ProdutcsContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ProdutcsContext.Provider>
  );
};
