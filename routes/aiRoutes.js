import express from 'express';
import { TextController } from '../controllers/textController.js';


const router = express.Router();

//routes
// router.post('/generate-text', AIController.getResponse);
router.post('/process-code', TextController.getResponse);

export default router;