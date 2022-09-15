import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from './CartItems'
import "./Layout.css";
import { connect } from 'react-redux'


const Layout = (props) => {
  const { showCart, itemLists } = props.cart
  let total = 0;
  itemLists.map(e => {
    total += e.total_price
  })

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}

        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Layout);
