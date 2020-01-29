import React from "react";

import "../../styles/components/timezone/index.scss";

const Timezone = ({ data }) => (
  <div className="timezone">
    {data !== undefined ? (
      <div className="container">
        <div className="card-container-100">
          <div className="card timezone-card">
            <h2>Timezone</h2>
            <p>
              <span>timezone</span>
              {data.timezone}
            </p>
            <p>
              <span>offset</span>
              {data.timezone_offset}
            </p>
            <p>
              <span>date</span>
              {data.date}
            </p>
            <p>
              <span>date time</span>
              {data.date_time}
            </p>
            <p>
              <span>date time text</span>
              {data.date_time_txt}
            </p>
            <p>
              <span>time 24h</span>
              {data.time_24}
            </p>
            <p>
              <span>time 12h</span>
              {data.time_12}
            </p>
            <p>
              <span>week</span>
              {data.week}
            </p>
            <p>
              <span>month</span>
              {data.month}
            </p>
            <p>
              <span>year</span>
              {data.year}
            </p>
            <p>
              <span>year abbreviation</span>
              {data.year_abbr}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <h1>loading...</h1>
    )}
  </div>
);

export default Timezone;
