import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { connect } from 'react-redux'

function App(props) {
  const { logStatus } = props.auth
  return (
    <div className="App">
      {logStatus ? <Layout /> : <Auth />}

    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App);
