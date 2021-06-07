import React from "react";
import { FaqItem } from "./FaqItem";
import "./Faq.css";

export const FAQ = () => {
  return (
    <div className="faqContainer">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <div className="accordion">
        <FaqItem
          title="How to navigate this website?"
          content="Click on the menu icon at the top left of the page to access the sidebar menu.
                    From there click on one of the section headers to view that specific section of the site."
        />
        <FaqItem
          title="How to customize your dietary restrictions?"
          content="Navigate to the sidebar menu and click on Dietary Restrictions.
                    Select the checkbox if that particular dietary restrition applies for you and 
                    click on the Update Dietary Restrictions button to update your restrictions."
        />
        <FaqItem
          title="How to add a product to your cart?"
          content="Navigate to the sidebar menu and click on View Products.
                    All of the products will be shown unless you added some dietary restrictions.
                    Click on the Add To Cart button to add a product to your cart.
                    A message will appear on your screen as confirmation that the product was succesfully
                    added to your cart."
        />
        <FaqItem
          title="How to view your cart?"
          content="Navigate to the sidebar menu and click on My Cart.
                    From there you will be able view all the items in your cart along with their price.
                    Your total price will also be shown."
        />
        <FaqItem
          title="How to place an order for delivery?"
          content="Navigate to the sidebar menu and click on Delivery Info.
                A form along with your total order will be shown. 
                Enter your contact information on the provided form and click on the Submit Form button to submit your order."
        />
      </div>
    </div>
  );
};
