import React, { useState, useEffect } from "react";
import { Card } from "./Card.js";
import './Product.css'

export const Product = () => {
  // List of products
  var products = [
    {
      name: "Yogurt",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 5.99,
    },
    {
      name: "Almond Granola",
      lactoseFree: true,
      nutFree: false,
      organic: true,
      price: 4.49,
    },
    {
      name: "Salmon",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 8.99,
    },
    {
      name: "Apple",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 1.15,
    },
    {
      name: "Banana",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 1.45,
    },
    {
      name: "Chips",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 3.99,
    },
    {
      name: "Nutella",
      lactoseFree: true,
      nutFree: false,
      organic: false,
      price: 5.49,
    },
    {
      name: "Brocolli",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 2.49,
    },
    {
      name: "Milk",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 3.49,
    },
    {
      name: "Peanut Butter Ice Cream",
      lactoseFree: false,
      nutFree: false,
      organic: false,
      price: 5.99,
    },
    {
      name: "Bread",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 2.99,
    },
    {
      name: "Cheese",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 3.99,
    },
  ];

  // State to track products and for filtering
  const [prods, setProds] = useState(products);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Filter products based on user preferences
    let product_names = [];
    let counter = 0 
    if(sessionStorage.getItem("lactoseFree") != null) {
      var lactose = JSON.parse(sessionStorage.getItem("lactoseFree"));
      if (lactose === true) { counter = counter + 1; }
      var nuts = JSON.parse(sessionStorage.getItem("nutFree"));
      if (nuts === true) { counter = counter + 1; }
      var organic = JSON.parse(sessionStorage.getItem("organic"));
      if (organic === true) { counter = counter + 1; }

      for (let i = 0; i < products.length; i += 1) {
        if(counter >= 2) {
          if ( (lactose === true && nuts === true) && (products[i].lactoseFree === true && products[i].nutFree === true) ) {
            product_names.push(products[i]);
          }
          else if (lactose === true && organic === true && products[i].lactoseFree === true && products[i].organic === true) {
            product_names.push(products[i]);
          }
          else if (nuts === true && organic === true && products[i].nutFree === true && products[i].organic === true) {
            product_names.push(products[i]);
          }
        }
        else {
          if (lactose === true && products[i].lactoseFree === true) {
            product_names.push(products[i]);
          }
          else if (nuts === true && products[i].nutFree === true) {
            product_names.push(products[i]);
          }
          else if (organic === true && products[i].organic === true) {
            product_names.push(products[i]);
          }
          else if (lactose === false && nuts === false && organic === false) {
            product_names.push(products[i]);
          }
        }
      }
    }
    else{
      for (let i = 0; i < products.length; i += 1) { 
        product_names.push(products[i]); 
      }
    }
    let sorted = product_names;
    product_names.sort((a, b) => a.price - b.price);
    setProds(sorted);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array for second parameter means only run on mount and unmount. Without empty array useEffect runs in an infinite loop

  return (
    <div className="prod">
      <h1>Products</h1>
      <div className="prod_container">
        <div className="prod_wrapper">
          {prods.map((item, i) => (
            <ul key={i} className="prod_ul">
              <Card product={item} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
