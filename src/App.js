import React, { Component } from "react";
import "./App.css";

import api from "./services/api";

class App extends Component {
  componentDidMount() {
    this.login();
  }

  async login() {
    const user = await api.get("/users");
    console.log("====================================");
    console.log(user);
    console.log("====================================");
  }

  render() {
    return <h1>IP Weather</h1>;
  }
}

export default App;
