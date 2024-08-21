import express from 'express';
import { PromptController } from '../controllers/promptController.js';


const router = express.Router();


//routes
router.get('/all', PromptController.getPromptOptions);


export default router;