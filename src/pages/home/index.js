import React from "react";
import Info from "../../components/info";

import "../../styles/pages/home/index.scss";

const Home = () => (
  <div className="home">
    <div className="home-container">
      <h1>Map</h1>
    </div>
    <div className="home-container">
      <Info />
    </div>
  </div>
);

export default Home;
