import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions as UserActions } from "../../store/ducks/users";

class Login extends Component {
  componentDidMount() {
    // const { loginRequest } = this.props;
    // loginRequest();
  }

  render() {
    return <h1>IP Weather</h1>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(() => ({}), mapDispatchToProps)(Login);
