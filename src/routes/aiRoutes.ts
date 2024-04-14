import express from 'express';
import { TranscriptionController } from '../controllers/transcriptionController.js';
import { TextGeneratingController } from '../controllers/textGeneratingController.js';
import upload from '../middleware/multerConfig.js'; 
import analyticsMiddleware from '../middleware/analyticsEngine.js';


const router = express.Router();

//routes
router.post('/generate-text', TextGeneratingController.getGeneratedTextPost, analyticsMiddleware);
router.post('/transcribe-audio', upload.single('audio'), TranscriptionController.getResponse); 

export default router;