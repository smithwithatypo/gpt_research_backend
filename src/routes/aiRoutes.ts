import express from 'express';
import { TranscriptionController } from '../controllers/transcriptionController.js';
import { TextGeneratingController } from '../controllers/textGeneratingController.js';


const router = express.Router();

//routes
router.get('/transcribe-audio', TranscriptionController.getResponse); 
router.get('/generate-text', TextGeneratingController.getGeneratedText)  // change to POST?


export default router;