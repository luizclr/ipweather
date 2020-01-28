import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions as UserActions } from "../../store/ducks/users";

import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

import "../../styles/pages/index.scss";

class Login extends Component {
  componentDidMount() {
    // const { loginRequest } = this.props;
    // loginRequest();
  }

  render() {
    return (
      <div className="login">
        <div>
          <img src={sun} alt="sun" id="sun" />
          <form className="card">
            <h1>IP Weather</h1>
            <input type="email" placeholder="e-mail" className="input" />
            <input type="password" placeholder="password" className="input" />
            <button type="submit" className="btn">
              LOGIN
            </button>
          </form>
          <img src={moon} alt="moon" id="moon" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(() => ({}), mapDispatchToProps)(Login);
