import express from 'express';
import { TextController } from '../controllers/textController.js';
import { TranscriptionController } from '../controllers/transcriptionController.js';


const router = express.Router();

//routes
// router.post('/generate-text', AIController.getResponse);
router.post('/process-code', TextController.getResponse);
router.get('/transcribe-audio', TranscriptionController.getResponse); 

export default router;