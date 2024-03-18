import { Problem } from '../models/problem';
import  problems  from '../data/problemDatabase.js';


class ReadProblemService {
    
    static async getProblemSummaries(): Promise<Array<{ problemID: number, summary: string }>> {
        const summaries: Array<{ problemID: number, summary: string }> = [];
        problems.forEach((problem: Problem, problemID: number) => {
            summaries.push({ problemID, summary: problem.summary });
        });
        return summaries;
    }

    static async getOneProblem(problemID: number): Promise<Problem | any> {
        try {
            // console.log( problems.get(problemID));
            return problems.get(problemID);
        } catch (error) {
            console.error('Error reading problem:', error);
        }
        return undefined;
    }

    // DELETE?
    static async placeholder(): Promise<Problem | any> {
        try {
            return problems.get(0);
        } catch (error) {
            console.error('Error reading problem:', error);
        }
        return undefined;
    }
}

export { ReadProblemService };