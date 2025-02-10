import React, { useEffect, useState } from "react";
import RouteList from "./RouteList";
import { getRoutes } from "../api/bustimeApi";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  console.log("Navbar rendered");
  const [umRoutes, setUmRoutes] = useState([]);
  const [theRideRoutes, setTheRideRoutes] = useState([]);
  const [activeAgency, setActiveAgency] = useState("UM");

  useEffect(() => {
    console.log("Fetching routes...");
    getRoutes("UM").then(setUmRoutes);
    getRoutes("THERIDE").then(setTheRideRoutes);
  }, []);

  const handleAgencyClick = (agency) => {
    setActiveAgency(agency);
  };

  return (
    <div>
      <div className="agency-selector">
        <span
          className={`agency ${activeAgency === "UM" ? "active" : ""}`}
          onClick={() => handleAgencyClick("UM")}
        >
          UM
        </span>
        <span
          className={`agency ${activeAgency === "THERIDE" ? "active" : ""}`}
          onClick={() => handleAgencyClick("THERIDE")}
        >
          THE RIDE
        </span>
      </div>
      <RouteList agency={activeAgency} routes={activeAgency === "UM" ? umRoutes : theRideRoutes} />
    </div>
  );
};

export default Navbar;
