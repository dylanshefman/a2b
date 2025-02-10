import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    const map = L.map("map").setView([42.2808, -83.7430], 13); // Centered on Ann Arbor

    // Use CartoDB Positron as the base map
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://carto.com/attributions'>CartoDB</a>",
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="map"></div>;
};

export default Map;
