const API_BASE_URL = "http://localhost:5002/api";

export const getRoutes = (agency) => {
  return fetch(`${API_BASE_URL}/routes?agency=${agency}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching routes:", error);
      return [];
    });
};
