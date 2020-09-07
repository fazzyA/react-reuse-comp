import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartItem from "./CartItem";
import CartTable from "./CartTable";
import Footer from './Footer';
import { ProductList } from './ProductList';
import Cart  from './Cart';


export default function Nav() {
  return (
    <Router>
      <div>
          <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/cart">Cart</Link>
                </li>
            </ul>
            </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
          <Cart />
          <ProductList />
          <Footer />
          </Route>
          <Route exact path="/cart">
            <CartTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}