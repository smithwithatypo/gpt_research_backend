import express from 'express';
import { ProblemController } from '../controllers/problemController.js';


const router = express.Router();

//routes
router.get('/summaries', ProblemController.getSummaries); 
router.get('/:id', ProblemController.getProblemData)


export default router;