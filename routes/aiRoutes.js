import express from 'express';
import { TextController } from '../controllers/textController.js';
import { AudioController } from '../controllers/audioController.js';


const router = express.Router();

//routes
// router.post('/generate-text', AIController.getResponse);
router.post('/process-code', TextController.getResponse);
// router.post('/process-audio', AudioController.getResponse);  // TODO: error here

export default router;