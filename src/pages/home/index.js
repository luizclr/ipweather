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
  state = {
    currentPage: "GEOLOCATION"
  };

  componentDidMount() {
    const { geolocationRequest } = this.props;

    geolocationRequest();
  }

  openPage(pageName) {
    const { timezoneRequest, astronomyRequest } = this.props;
    const { timezone, astronomy } = this.props;

    switch (pageName) {
      case "TIMEZONE":
        if (!timezone.data) timezoneRequest();
        break;
      case "ASTRONOMY":
        if (!astronomy.data) astronomyRequest();
        break;
      default:
        break;
    }
    this.setState({ currentPage: pageName });
  }

  render() {
    const { geolocation, timezone, astronomy } = this.props;
    const { currentPage } = this.state;

    return (
      <div className="home">
        <div className="home-container">
          <h1>Map</h1>
        </div>
        <div className="home-container info">
          <ul>
            <li onClick={() => this.openPage("GEOLOCATION")}>Geolocation</li>
            <li onClick={() => this.openPage("TIMEZONE")}>Timezone</li>
            <li onClick={() => this.openPage("ASTRONOMY")}>Astronomy</li>
          </ul>

          {currentPage === "GEOLOCATION" ? (
            <Geolocation data={geolocation.data} />
          ) : null}
          {currentPage === "TIMEZONE" ? (
            <Timezone data={timezone.data} />
          ) : null}
          {currentPage === "ASTRONOMY" ? (
            <Astronomy data={astronomy.data} />
          ) : null}
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
