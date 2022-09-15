import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './store/authSlice'
import cartSlice from "./store/cartSlice";
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice
  }
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
