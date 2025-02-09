import React, { useEffect, useState } from "react";
import RouteList from "./RouteList";
import { getRoutes } from "../api/bustimeApi";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [umRoutes, setUmRoutes] = useState([]);
  const [theRideRoutes, setTheRideRoutes] = useState([]);
  const [activeAgency, setActiveAgency] = useState("UM");

  useEffect(() => {
    getRoutes("UM").then(setUmRoutes);
    getRoutes("THERIDE").then(setTheRideRoutes);
  }, []);

  const handleAgencyClick = (agency) => {
    setActiveAgency(agency);
  };

  return (
    <div className="navbar-container">
      <h1>Transit Routes</h1>
      <div className="agency-selector">
        <div
          className={`agency-item ${activeAgency === "UM" ? "active" : ""}`}
          onClick={() => handleAgencyClick("UM")}
        >
          <span className="agency-name">UM</span>
        </div>
        <div
          className={`agency-item ${activeAgency === "THERIDE" ? "active" : ""}`}
          onClick={() => handleAgencyClick("THERIDE")}
        >
          <span className="agency-name">THE RIDE</span>
        </div>
      </div>
      <RouteList agency={activeAgency} routes={activeAgency === "UM" ? umRoutes : theRideRoutes} />
    </div>
  );
};

export default Navbar;
