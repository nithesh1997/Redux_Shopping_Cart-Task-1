import React from "react";
import "./Product.css";
import { connect } from 'react-redux';
import { addCart } from '../store/cartSlice'


const Product = (props) => {

  function handleAddcart() {
    const { name, id, price } = props
    props.addCart({ name, id, price })
  }

  return (
    <div className="card">
      <img src={props.imgURL} alt={props.name} />
      <h2>{props.name}</h2>
      <p>$ {props.price}</p>
      <button onClick={handleAddcart}>Add to cart</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (e) => dispatch(addCart(e))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
