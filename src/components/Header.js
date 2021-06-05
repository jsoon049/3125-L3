import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <h1 className="brand">Got Foodz</h1>
      <span
        // style={!open ? { display: "" } : { visibility: "hidden" }}
        onClick={() => setOpen(true)}
        className="openbtn"
      >
        &#9776; Menu
      </span>
        {/* {open && (  */}
          <div className={open ? 'sidenav active' : 'sidenav'}>
            <button className="closebtn" onClick={() => setOpen(false)}>
                &times;
              </button>
            <ul className="sidenavUL">
              <li>
                <Link to="/3125-L3/" onClick={() => setOpen(false)}>
                  Dietary Restrictions
                </Link>
              </li>
              <li>
                <Link to="/3125-L3/product" onClick={() => setOpen(false)}>
                  View Products
                </Link>
              </li>
              <li>
                <Link to="/3125-L3/cart" onClick={() => setOpen(false)}>
                  My Cart
                </Link>
              </li>
              <li>
                <Link to="/3125-L3/delivery" onClick={() => setOpen(false)}>
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link to="/3125-L3/faq" onClick={() => setOpen(false)}>
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        {/* )} */}
    </div>
  );
};
