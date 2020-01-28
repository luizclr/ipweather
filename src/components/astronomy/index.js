import React from "react";

import "../../styles/components/astronomy/index.scss";

const Astronomy = ({ data }) => (
  <div className="astronomy">
    <h1>Astronomy</h1>
    {data !== undefined ? (
      <div className="container">
        <div className="card-container-100">
          <div className="card astronomy-card">
            <h2>astronomy</h2>
            <p>
              <span>astronomy</span>
              astronomy
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
