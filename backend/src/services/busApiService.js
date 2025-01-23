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
      console.log("API Response Data:", data);
      return data["bustime-response"]?.routes || [];
    })
    .catch((error) => {
      console.error(`Error fetching data from ${agency}:`, error.message);
      throw new Error("Failed to fetch routes.");
    });
};
