import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Customer } from "./components/Customer";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Delivery } from "./components/Delivery";
import { FAQ } from "./components/Faq";
import { Footer } from "./components/Footer";
import "./App.css";
import { GlobalProvider } from "./components/GlobalState";

function App() {
  return (
    <div className="appContainer">
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/3125-L3/">
              <Customer />
            </Route>
            <Route path="/3125-L3/product">
              <Product />
            </Route>
            <Route path="/3125-L3/cart">
              <Cart />
            </Route>
            <Route path="/3125-L3/delivery">
              <Delivery />
            </Route>
            <Route path="/3125-L3/faq">
              <FAQ />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
