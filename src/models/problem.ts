
export class Problem {
    problemID: number;
    categories: string[];
    problem: string;
    example1?: string;
    example2?: string;
    example3?: string;
  
    // examples are optional but highly recommended
    // use this format for examples:   
    //                 "Input: nums = [1,2,3,1] Output: true"

    constructor(problemID: number, categories: string[], problem: string, example1?: string, example2?: string, example3?: string) {
      this.problemID = problemID;
      this.categories = categories;
      this.problem = problem;
      this.example1 = example1 || '';
      this.example2 = example2 || '';
      this.example3 = example3 || '';
    }
}
  