import React from "react";

import "../../styles/components/geolocation/index.scss";

const Geolocation = ({ data }) => (
  <div className="geolocation">
    {data !== undefined ? (
      <div className="container">
        <div className="card-container-100">
          <div className="card location">
            <h2>Location</h2>
            <p>
              <span>continent code</span>
              {data.continent_code}
            </p>
            <p>
              <span>continent</span>
              {data.continent_name}
            </p>
            <p>
              <span>country code</span>
              {data.country_code3}
            </p>
            <p>
              <span>continent</span>
              {data.country_name}
            </p>
            <p>
              <span>country capital</span>
              {data.country_capital}
            </p>
            <p>
              <span>state</span>
              {data.state_prov}
            </p>
            <p>
              <span>district</span>
              {data.district}
            </p>
            <p>
              <span>city</span>
              {data.city}
            </p>
            <p>
              <span>zipcode</span>
              {data.zipcode}
            </p>
            <p>
              <span>latitude</span>
              {data.latitude}
            </p>
            <p>
              <span>longitude</span>
              {data.longitude}
            </p>
            <p>
              <span>calling code</span>
              {data.calling_code}
            </p>
          </div>
        </div>

        <div className="card-container-50">
          <div className="card currency">
            <h2>Currency</h2>
            <p>
              <span>code</span>
              {data.currency.code}
            </p>
            <p>
              <span>name</span>
              {data.currency.name}
            </p>
            <p>
              <span>symbol</span>
              {data.currency.symbol}
            </p>
          </div>
        </div>

        <div className="card-container-50">
          <div className="card network">
            <h2>Netword</h2>
            <p>
              <span>IP</span>
              {data.ip}
            </p>
            <p>
              <span>isp</span>
              {data.isp}
            </p>
            <p>
              <span>connection type</span>
              {data.connection_type}
            </p>
            <p>
              <span>organization</span>
              {data.organization}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <h1>loading...</h1>
    )}
  </div>
);

export default Geolocation;
