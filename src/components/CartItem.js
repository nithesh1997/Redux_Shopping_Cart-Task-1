import React from "react";
import "./Cart.css";
import { connect } from 'react-redux'
import { addCart, deleteCart } from '../store/cartSlice'


const CartItem = (props) => {
  function handleAdditem() {
    const { name, id, price } = props
    props.addBtnCartDispatch({ name, id, price })
  }

  function handleDeleteItem() {
    const { name, id, price } = props
    props.deleteCartDispatch({ name, id, price })
  }

  return (
    <div className="cartItem">
      <h2> {props.name}</h2>
      <p>${props.price} /-</p>
      <p>x{props.quantity}</p>
      <article>Total ${props.total}</article>
      <button className="cart-actions" onClick={handleDeleteItem}>
        -
      </button>
      <button className="cart-actions" onClick={handleAdditem}>
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBtnCartDispatch: (e) => dispatch(addCart(e)),
    deleteCartDispatch: (e) => dispatch(deleteCart(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
