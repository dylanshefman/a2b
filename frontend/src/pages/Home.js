import React from "react";
import RouteList from "../components/RouteList";

const Home = () => (
  <div>
    <h1>Transit Routes</h1>
    <RouteList agency="UM" />
    <RouteList agency="THERIDE" />
  </div>
);

export default Home;
