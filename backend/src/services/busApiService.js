import { AGENCIES } from '../config/config.js';

export const fetchRoutes = (agency) => {
  if (!AGENCIES[agency]) {
    return Promise.reject(new Error("Invalid agency specified."));
  }

  const { apiKey, baseURL } = AGENCIES[agency];
  console.log(`apikey: ${apiKey}`);
  console.log(`base url: ${baseURL}`);
  const endpoint = '/bustime/api/v3/getroutes';
  const url = `${baseURL}${endpoint}`;

  return fetch(`${url}?key=${apiKey}&format=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data["bustime-response"]?.routes || [];
    })
    .catch((error) => {
      throw new Error("Failed to fetch routes.");
    });
};

export const fetchVehicles = (route) => {
  let agency;
  
  if (/^\d+$/.test(route)) {
    agency = "THERIDE"; // Routes with numbers are TheRide buses
  } else if (/^[A-Za-z]+$/.test(route)) {
    agency = "UM"; // Routes with letters are UM buses
  } else {
    return Promise.reject(new Error("Invalid route code."));
  }

  if (!AGENCIES[agency]) {
    return Promise.reject(new Error("Agency configuration missing."));
  }

  const { apiKey, baseURL } = AGENCIES[agency];
  const endpoint = "/bustime/api/v3/getvehicles";
  const url = `${baseURL}${endpoint}?key=${apiKey}&rt=${route}&format=json`;

  console.log(`Fetching vehicles for route: ${route}, agency: ${agency}`);

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch vehicles: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data["bustime-response"]?.vehicle || [];
    })
    .catch((error) => {
      throw new Error("Failed to fetch vehicles.");
    });
};
