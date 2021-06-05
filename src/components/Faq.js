import React from 'react'
import {FaqItem} from './FaqItem'
import './Faq.css'

export const FAQ = () => {
    return (
        <div className="faqContainer">
            <h1>Frequently Asked Questions (FAQ)</h1>
            <div className="accordion">
                <FaqItem
                    title="How to navigate this website?"
                    content="Click the icon with the 3 horizontal bars at the top left of the page to access the sidebar menu.
                    From there select a specific section of the site you would like to view."
                />
                <FaqItem
                    title="How to customize your dietary restrictions?"
                    content="Navigate to the sidebar menu and click on the customer section. 
                    Select the checkboxes if that particular dietary restrition applies for you and 
                    click on the save preferences button to save your preferences."
                />
                <FaqItem
                    title="How to add a product to your shopping cart?"
                    content="Navigate to the sidebar menu and click on the product section. 
                    All of our products will be shown unless you added some dietary restrictions.
                    Click on the add to cart button to add a product to your cart.
                    A message will appear on your screen as confirmation that the product was succesfully
                    added to your cart."
                />
                <FaqItem
                    title="How to view your cart?"
                    content="Navigate to the sidebar menu and click on the cart section. 
                    From there you will be able view all the items in your cart along with their price.
                    Your total price will also be shown."
                />
            </div>
        </div>
    )
}
