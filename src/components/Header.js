import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <h1 className="brand">Got Foodz</h1>
      <span
        style={!open ? { display: "" } : { visibility: "hidden" }}
        onClick={() => setOpen(true)}
        className="openbtn"
      >
        menu &#9776;
      </span>
      <div>
        {open && (
          <ul className="sidenav">
             <button className="closebtn" onClick={() => setOpen(false)}>
              &times;
            </button>
            <li>
              <Link to="/3125-L3/" onClick={() => setOpen(false)}>
                Customer
              </Link>
            </li>
            <li>
              <Link to="/3125-L3/product" onClick={() => setOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/3125-L3/cart" onClick={() => setOpen(false)}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/3125-L3/delivery" onClick={() => setOpen(false)}>
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/3125-L3/faq" onClick={() => setOpen(false)}>
                FAQ
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
