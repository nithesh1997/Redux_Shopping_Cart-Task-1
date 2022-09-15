import React from "react";
import "./Auth.css";
import { connect } from 'react-redux';
import { login } from '../store/authSlice'

const Auth = (props) => {

  function handleLogin() {
    props.loginDispatch()
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
