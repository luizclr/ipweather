import React, { Component } from "react";
import Geolocation from "../../components/geolocation";
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
    const { geolocation } = this.props;

    return (
      <div className="home">
        <div className="home-container">
          <h1>Map</h1>
        </div>
        <div className="home-container info">
          <Geolocation data={geolocation.data} />
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
