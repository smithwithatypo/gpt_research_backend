import express from 'express';
import { TranscriptionController } from '../controllers/transcriptionController.js';
import { TextGeneratingController } from '../controllers/textGeneratingController.js';
import upload from '../middleware/multerConfig.js'; 
import analyticsMiddleware from '../middleware/analyticsEngine.js';
import cookieAssignment from '../middleware/cookieAssignment.js';


const router = express.Router();

if (process.env.NODE_ENV === 'production') {
    router.post('/generate-text', cookieAssignment, TextGeneratingController.getGeneratedTextPost, analyticsMiddleware);
    router.post('/transcribe-audio', upload.single('audio'), TranscriptionController.getResponse);
  } else {
    router.post('/generate-text', TextGeneratingController.getGeneratedTextPost);
    router.post('/transcribe-audio', upload.single('audio'), TranscriptionController.getResponse);
} 

//routes
// router.post('/generate-text', cookieAssignment, TextGeneratingController.getGeneratedTextPost, analyticsMiddleware);  // prod only
// // router.post('/generate-text', TextGeneratingController.getGeneratedTextPost);  // dev only
// router.post('/transcribe-audio', upload.single('audio'), TranscriptionController.getResponse); 

export default router;