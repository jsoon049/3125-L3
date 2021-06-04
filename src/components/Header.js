import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <h2 className="brand">Got Foodz</h2>
      <ul className="nav-links">
        <li>
          <Link to="/3125-L3/">Customer</Link>
        </li>
        <li>
          <Link to="/3125-L3/product">Product</Link>
        </li>
        <li>
          <Link to="/3125-L3/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
