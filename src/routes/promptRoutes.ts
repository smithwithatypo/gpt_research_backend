import express from 'express';
import { PromptController } from '../controllers/promptController.js';


const router = express.Router();

//routes
// router.get('/summaries', ProblemController.getSummaries); 
// router.get('/:id', ProblemController.getProblemData);
router.get('/all', PromptController.getPromptOptions);


export default router;