import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { connect } from 'react-redux'
const CartItems = (props) => {
  const { itemLists } = props.cart
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemLists.map(e => (
          <li key={e.id}>
            <CartItem id={e.id} price={e.price} name={e.name} total={e.total_price} quantity={e.quentity} />
          </li>
        ))}

      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CartItems);
