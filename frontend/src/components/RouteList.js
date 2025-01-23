import React, { useEffect, useState } from "react";
import { getRoutes } from "../api/bustimeApi";

const RouteList = ({ agency }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    getRoutes(agency).then(setRoutes);
  }, [agency]);

  return (
    <div>
      <h2>{agency} Routes</h2>
      <ul>
        {routes.map(route => (
          <li key={route.rt}>
            <span style={{ color: route.rtclr }}>{route.rtnm}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
