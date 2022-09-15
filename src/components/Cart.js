import React from "react";
import "./Cart.css";
import { connect } from 'react-redux';
import { showCart } from '../store/cartSlice'
const Cart = (props) => {
  const quantity = props.cart.cartQuentity;

  function handleShowcart() {
    props.showcartDispatch()
  }
  return (
    <div className="cartIcon" onClick={handleShowcart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    showcartDispatch: () => dispatch(showCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
