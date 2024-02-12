import express from 'express';
import { AIController, AITest } from '../controllers/aiController.js';


const router = express.Router();

//routes
router.post('/generate-text', AIController.getResponse);
router.post('/process-text', AITest.processText);

export default router;