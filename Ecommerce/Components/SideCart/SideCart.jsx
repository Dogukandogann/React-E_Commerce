import React from "react";
import "./SideCart.css";
import cart_icon from "./cart_icon.png";
import { useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const SideCart = () => {
  const {
    addProduct,
    onRemove,
    onAdd,
    onRemoveItem,
    calculateTotal,
    totalQuantity,
    setAddProduct,
  } = useContext(CartContext);

  useEffect(() => {
    const openBtn = document.querySelector(".open_cart_btn");
    const cart = document.querySelector(".sidecart");
    const closeBtn = document.querySelector(".close_btn");

    const openCart = () => {
      cart.classList.add("open");
    };
    const closeCart = () => {
      cart.classList.remove("open");
    };

    openBtn.addEventListener("click", openCart);
    closeBtn.addEventListener("click", closeCart);

    return () => {
      openBtn.removeEventListener("click", openCart);
      closeBtn.removeEventListener("click", closeCart);
    };
  }, []);

  return (
    <>
      <button className="open_cart_btn">
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">{totalQuantity}</div>
      </button>

      <div id="sidecart" className="sidecart">
        <div className="cart_content">
          <div className="cart-header">
            <img src="" alt="" />
            <div className="header_title">
              <h2>Your Cart</h2>
            </div>
            <span className="close_btn">&times;</span>
          </div>
          <div className="cart_items">
            {addProduct.map((item, i) => (
              <div key={i} className="cart_item">
                <div className="remove_item">
                  <span onClick={() => onRemoveItem(item.id)}>&times;</span>
                </div>
                <div className="item_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="item_details">
                  <p>{item.name}</p>
                  <strong>{`$${item.price}`}</strong>
                  <div className="qty">
                    <span onClick={() => onRemove(item)}>-</span>
                    <strong>{item.qty}</strong>
                    <span onClick={() => onAdd(item)}>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart_actions">
            <div className="subtotal">
              <p>SUBTOTAL:</p>
              <p>
                ${" "}
                <span className="subtotal_price">
                  {calculateTotal().toFixed(2)}
                </span>
              </p>
            </div>
            <button>View Cart</button>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideCart;
