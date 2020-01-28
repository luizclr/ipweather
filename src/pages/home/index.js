import React, { Component } from "react";
import Info from "../../components/info";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions as GeolocationActions } from "../../store/ducks/geolocation";

import "../../styles/pages/home/index.scss";

class Home extends Component {
  componentDidMount() {
    const { geolocationRequest } = this.props;
    geolocationRequest();
  }

  render() {
    return (
      <div className="home">
        <div className="home-container">
          <h1>Map</h1>
        </div>
        <div className="home-container">
          <Info />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geolocation: state.geolocation
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GeolocationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
