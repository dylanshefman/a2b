import { fetchRoutes } from '../services/busApiService.js';

export const getRoutes = async (req, res) => {
  const agency = req.query.agency;

  if (!agency) {
    return res.status(400).json({ error: "Agency parameter is required." });
  }

  try {
    const routes = await fetchRoutes(agency);
    console.log('Fetched Routes:', routes);
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
