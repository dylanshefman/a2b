import express from 'express';
import { getRoutes, getVehicles } from '../controllers/routesController.js';

const router = express.Router();

router.get('/routes', getRoutes);
router.get('/vehicles', getVehicles);

export default router;
