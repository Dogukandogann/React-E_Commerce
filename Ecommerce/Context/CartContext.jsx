import React, { children } from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialProducts = JSON.parse(localStorage.getItem("cart")) || [];
  const [addProduct, setAddProduct] = useState(initialProducts);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addProduct));
  }, [addProduct]);

  const onAdd = (item) => {
    const exist = addProduct.find((x) => x.id === item.id);
    if (exist) {
      const newCartItems = addProduct.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setAddProduct(newCartItems);
    } else {
      const newCartItems = [...addProduct, { ...item, qty: 1 }];
      setAddProduct(newCartItems);
    }
  };

  const onRemove = (item) => {
    const exist = addProduct.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setAddProduct(addProduct.filter((x) => x.id !== item.id));
    } else {
      setAddProduct(
        addProduct.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const calculateTotal = () => {
    let total = 0;
    addProduct.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  };
  const onRemoveItem = (itemId) => {
    setAddProduct(addProduct.filter((x) => x.id !== itemId));
  };
  const totalQuantity = addProduct.reduce((total, item) => total + item.qty, 0);
  return (
    <CartContext.Provider
      value={{
        addProduct,
        onAdd,
        onRemove,
        onRemoveItem,
        calculateTotal,
        totalQuantity,
        setAddProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
