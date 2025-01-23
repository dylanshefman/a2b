import express from 'express';
import { getRoutes } from '../controllers/routesController.js';

const router = express.Router();

router.get('/routes', getRoutes);

export default router;
