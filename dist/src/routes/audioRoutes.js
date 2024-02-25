import express from 'express';
import upload from '../middleware/multerConfig.js';
import { AudioController } from '../controllers/audioController.js';
const router = express.Router();
//routes
router.post('/upload-audio', upload.single('audio'), AudioController.uploadAudio);
export default router;
