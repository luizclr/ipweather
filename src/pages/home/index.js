import React, { Component } from "react";
import Geolocation from "../../components/geolocation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions as GeolocationActions } from "../../store/ducks/geolocation";
import { Actions as TimezoneActions } from "../../store/ducks/timezone";

import "../../styles/pages/home/index.scss";

class Home extends Component {
  componentDidMount() {
    const { geolocationRequest, timezoneRequest } = this.props;
    timezoneRequest();
  }

  render() {
    const { geolocation, timezone } = this.props;

    return (
      <div className="home">
        <div className="home-container">
          <h1>Map</h1>
        </div>
        <div className="home-container info">
          <Geolocation data={geolocation.data} />
          <Geolocation data={geolocation.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geolocation: state.geolocation,
  timezone: state.timezone
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...GeolocationActions, ...TimezoneActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
