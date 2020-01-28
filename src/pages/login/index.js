import React, { Component } from "react";
import authApi from "../../services/authApi";
import { isAuthenticated } from "../../utils";

import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

import "../../styles/pages/index.scss";

class Login extends Component {
  componentDidMount() {
    if (isAuthenticated()) this.props.history.push("/home");
  }

  state = {
    loading: false,
    data: [],
    error: null
  };

  async handleClick() {
    this.setState({ loading: true });
    try {
      const response = await authApi.get("/users");
      localStorage.setItem("token", response.data[0].auth.token);
      this.props.history.push("/home");
    } catch (error) {
      this.setState({
        loading: true,
        error: "Erro"
      });
    }
  }

  render() {
    const { loginRequest } = this.props;

    return (
      <div className="login">
        <div>
          <img src={sun} alt="sun" id="sun" />
          <form className="card">
            <h1>IP Weather</h1>
            <input type="email" placeholder="e-mail" className="input" />
            <input type="password" placeholder="password" className="input" />
            <button
              type="button"
              className="btn"
              onClick={() => this.handleClick(loginRequest)}
            >
              LOGIN
            </button>
          </form>
          <img src={moon} alt="moon" id="moon" />
        </div>
      </div>
    );
  }
}

export default Login;
