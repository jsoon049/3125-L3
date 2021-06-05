import React from "react";

export const Delivery = () => {
  return (
    <div className="deliveryContainer">
      <h1>Delivery Information</h1>
      <p className="instructions">
        If you would like your groceries to be delivered, please fill up the
        form below <br /> and an associate from our nearest store will contact
        you shortly.
      </p>
      <form method="post" action="" className="site-form">
        <div className="question-wrapper">
          <label>
            <strong>Describe Airbnb's UI in one word.</strong>
          </label>
          <br />
          <input type="text" name="name" size="30" />
        </div>
        <div className="question-wrapper">
          <label>
            <strong>
              What Airbnb UI features do you enjoy using (select all that
              apply)?
            </strong>
          </label>
        </div>
        <div className="button-wrapper">
          <input type="button" value="Submit" className="buttons" />
          <input type="reset" value="Clear" className="buttons" />
        </div>
      </form>
    </div>
  );
};
