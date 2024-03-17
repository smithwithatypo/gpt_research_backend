import { Problem } from '../models/problem';
import  problems  from '../data/problemDatabase.js';


class ReadProblemService {
    
    static async getProblemSummaries(): Promise<Array<{ problemID: string, summary: string }>> {
        const summaries = problems.map((problem: any) => {
            return { problemID: problem.problemID, summary: problem.summary };
        });
        return summaries;
    }

    static async getOneProblem(problemID: number): Promise<Problem | any> {
        try {
            return problems[problemID];
        } catch (error) {
            console.error('Error reading problem:', error);
        }
        return undefined;
    }

    static async placeholder(): Promise<Problem | any> {
        try {
            // console.log(problems[0]);
            return problems[0];
        } catch (error) {
            console.error('Error reading problem:', error);
        }
        return undefined;
    }
}

export { ReadProblemService };