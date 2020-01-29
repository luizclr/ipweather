import React from "react";

import "../../styles/components/astronomy/index.scss";

const Astronomy = ({ data }) => (
  <div className="astronomy">
    <h1>Astronomy</h1>
    {data !== undefined ? (
      <div className="container">
        <div className="card-container-100">
          <div className="card astronomy-card">
            <h2>Astronomy</h2>
            <p>
              <span>date</span>
              {data.date}
            </p>
            <p>
              <span>sunrise</span>
              {data.sunrise}
            </p>
            <p>
              <span>sunset</span>
              {data.sunset}
            </p>
            <p>
              <span>solar noon</span>
              {data.solar_noon}
            </p>
            <p>
              <span>day length</span>
              {data.day_length}
            </p>
            <p>
              <span>sun altitude</span>
              {data.sun_altitude}
            </p>
            <p>
              <span>sun distance</span>
              {data.sun_distance}
            </p>
            <p>
              <span>moonrise</span>
              {data.moonrise}
            </p>
            <p>
              <span>moonset</span>
              {data.moonset}
            </p>
            <p>
              <span>moon altitude</span>
              {data.moon_altitude}
            </p>
            <p>
              <span>moon distance</span>
              {data.moon_distance}
            </p>
            <p>
              <span>moon parallactic angle</span>
              {data.moon_parallactic_angle}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <h1>loading...</h1>
    )}
  </div>
);

export default Astronomy;
