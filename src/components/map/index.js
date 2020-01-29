import React from "react";
import GoogleMapReact from "google-map-react";

import PropTypes from "prop-types";

import Marker from "../marker";

const Maps = ({ center, zoom, marker }) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }}
    defaultCenter={center}
    defaultZoom={zoom}
  >
    <Marker lat={marker.lat} lng={marker.lng} />
  </GoogleMapReact>
);

Maps.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number,
  marker: PropTypes.objectOf(Object)
};

Maps.defaultProps = {
  center: {
    lat: -20,
    lng: -50
  },
  zoom: 4,
  marker: {}
};

export default Maps;
