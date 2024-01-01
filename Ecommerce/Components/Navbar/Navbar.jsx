import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Navbar/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const initialMenu = localStorage.getItem("selectedMenu") || null;
  const [menu, setMenu] = useState(initialMenu);

  const handleMenuClick = (selectedMenu) => {
    setMenu(selectedMenu);
    localStorage.setItem("selectedMenu", selectedMenu);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Dogukan's Shop</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => handleMenuClick("/")}
          className={menu === "/" ? "selected" : ""}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "/" ? <hr /> : null}
        </li>
        <li
          onClick={() => handleMenuClick("/Products")}
          className={menu === "/Products" ? "selected" : ""}
        >
          <Link style={{ textDecoration: "none" }} to="/Products">
            Products
          </Link>
          {menu === "/Products" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
