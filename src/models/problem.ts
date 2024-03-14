// NOTE:  examples are optional but highly recommended to increase accuracy of AI responses
//        format examples like this:   
//            "Input: nums = [1,2,3,1] Output: true"


export class Problem {
    problemID: number;     // required
    summary: string;       // required
    categories: string[];  // required
    problem: string;       // required
    example1?: string;     // optional
    example2?: string;     // optional
    example3?: string;     // optional

    constructor(problemID: number, summary: string, categories: string[], problem: string, example1?: string, example2?: string, example3?: string) {
      this.problemID = problemID;
      this.summary = summary;
      this.categories = categories;
      this.problem = problem;
      this.example1 = example1 || '';
      this.example2 = example2 || '';
      this.example3 = example3 || '';
    }
}
