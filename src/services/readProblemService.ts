import { Problem } from '../models/problem';
import  problems  from '../data/problemDatabase.js';


class ReadProblemService {
    static async readProblemData(): Promise<Problem | undefined> {
        try {
            // console.log(problems[0]);
            return problems[0];
        } catch (error) {
            console.error('Error reading problem:', error);
        }
        return undefined;  // needed for typescript
    }
}

export { ReadProblemService };