// services
import { ReadProblemService } from '../services/readProblemService.js';
// models
import { ProblemStudentView } from '../models/problemStudentView.js';
import { Problem } from '../models/problem.js';


const ProblemController = {
    async getSummaries(req: any, res: any) {
        try {
            const response: any = await ReadProblemService.getProblemSummaries();
            res.json({ success: true, data: response });


        } catch (error) {
            console.error('Error in ProblemController:', error);
            res.status(500).json({ success: false, error: "Failed to get problems." });
        }
    },

    async getProblemData(req: any, res: any) {
        try {
            const full_problem: Problem = await ReadProblemService.getOneProblem( Number(req.params.id) );
            const response: ProblemStudentView = new ProblemStudentView(
                full_problem.problemID, 
                full_problem.summary,
                full_problem.problem,
                full_problem.example1,
                full_problem.example2,
                full_problem.example3
                );
            
            res.json({ success: true, data: response });
        } catch (error) {
            console.error('Error in ProblemController:', error);
            res.status(500).json({ success: false, error: "Failed to get problems." });
        }
    }
};

export { ProblemController };
