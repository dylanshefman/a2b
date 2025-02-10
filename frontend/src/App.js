import React from "react";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import "./styles.css";

function App() {
  console.log("app rendered");
  return (
    <div className="app-container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default App;
