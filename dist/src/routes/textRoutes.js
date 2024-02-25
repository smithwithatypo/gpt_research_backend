import express from 'express';
import { JSONDataController } from '../controllers/JSONDataController.js';
const router = express.Router();
//routes
router.post('/upload-json', JSONDataController.saveJSON);
export default router;
