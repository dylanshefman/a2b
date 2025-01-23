import React, { useEffect, useState } from "react";
import RouteList from "../components/RouteList";
import { getRoutes } from "../api/bustimeApi";

const Home = () => {
  const [umRoutes, setUmRoutes] = useState([]);
  const [theRideRoutes, setTheRideRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const umResponse = await getRoutes("UM");
        const theRideResponse = await getRoutes("THERIDE");

        setUmRoutes(umResponse);
        setTheRideRoutes(theRideResponse);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []); // Empty dependency array to run this once after component mounts

  return (
    <div>
      <h1>Transit Routes</h1>
      <RouteList agency="UM" routes={umRoutes} />
      <RouteList agency="THERIDE" routes={theRideRoutes} />
    </div>
  );
};

export default Home;
