import React from "react";
import "./RouteList.css";

const RouteList = ({ agency, routes }) => (
  <div>
    <h2>{agency} Routes</h2>
    <div className="route-list">
      {routes.length > 0 ? (
        routes.map((route) => (
          <div key={route.rt} className="route-item">
            <div className="route-circle" style={{ backgroundColor: route.rtclr }}>
              {route.rt}
            </div>
            <span className="route-name">{route.rtnm}</span>
          </div>
        ))
      ) : (
        <p>No routes available for {agency}.</p>
      )}
    </div>
  </div>
);

export default RouteList;
