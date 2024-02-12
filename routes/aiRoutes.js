import express from 'express';
import AIController from '../controllers/aiController.js';


const router = express.Router();

//routes
router.post('/generate-text', AIController.getResponse);

export default router;