import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default App;
