export class ProblemStudentView {
    problemID: number;
    summary: string;
    problem: string;
    example1?: string;
    example2?: string;
    example3?: string;

    constructor(problemID: number, summary:string, problem: string, example1?: string, example2?: string, example3?: string) {
        this.problemID = problemID;
        this.summary = summary;
        this.problem = problem;
        this.example1 = example1;
        this.example2 = example2;
        this.example3 = example3;
    }
}