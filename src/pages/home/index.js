import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Actions as AstronomyActions } from "../../store/ducks/astronomy";
import { Actions as GeolocationActions } from "../../store/ducks/geolocation";
import { Actions as TimezoneActions } from "../../store/ducks/timezone";

import Astronomy from "../../components/astronomy";
import Geolocation from "../../components/geolocation";
import Timezone from "../../components/timezone";

import "../../styles/pages/home/index.scss";

class Home extends Component {
  componentDidMount() {
    const {
      geolocationRequest,
      timezoneRequest,
      astronomyRequest
    } = this.props;

    astronomyRequest();
  }

  render() {
    const { geolocation, timezone, astronomy } = this.props;

    return (
      <div className="home">
        <div className="home-container">
          <h1>Map</h1>
        </div>
        <div className="home-container info">
          {/* <Geolocation data={geolocation.data} /> */}
          {/* <Timezone data={timezone.data} /> */}
          <Astronomy data={astronomy.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geolocation: state.geolocation,
  timezone: state.timezone,
  astronomy: state.astronomy
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...AstronomyActions,
      ...GeolocationActions,
      ...TimezoneActions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
