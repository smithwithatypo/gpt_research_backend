import { PromptOptions } from "../models/promptOptions.js";

let _voice = [
    {
      summary: 'senior SWE',
      text: 'be a senior software engineer at a big tech company',
    },
    {
      summary: 'student',
      text: 'be a university level computer science student',
    },
    {
      summary: 'professor',
      text: 'be a university level computer science professor',
    },
    { summary: 'none', text: '' },
  ];

let _instruction = [
    {
      summary: 'no logic gaps',
      text: 'my response needs to solve the problem with no logic gaps',
    },
    {
      summary: 'm',
      text: 'my response needs to match each subproblem to an appropriate data structure and algorithm',
    },
    {
      summary: 'p',
      text: 'my solution needs to have solid logic with no gaps, and handle edge cases',
    },
    {
      summary: 'u',
      text: 'my response needs to identify edge cases, identify subproblems, identify the format of the input and output, and ask about time and space constraints',
    },
    { summary: 'none', text: '' },
  ];

let _guardrail = [
    {
      summary: 'give answer',
      text: 'if my solution is incorrect, give me the correct answer',
    },
    { summary: 'none', text: '' },
    {
      summary: "don't give answer",
      text: "don't give me the solution. guide me to the answer",
    },
  ];


let _summarize = [
    { summary: 'summarize', text: 'summarize your response' },
    { summary: "don't summarize", text: "don't summarize your response" },
    { summary: 'none', text: '' },
  ];

let _COT = [
    { summary: 'step by step', text: "let's think step by step" },
    {
      summary: 'explain reasoning',
      text: 'explain your reasoning step by step',
    },
    { summary: 'none', text: '' },
  ];

let _extractor = [
    {
      summary: 'Likert scale',
      text: 'rate my answer according to the following scale:  Poor, Acceptable, Good, Very good, Incredible',
    },
    {
      summary: 'binary',
      text: 'rate my answer either correct or incorrect',
    },
    {
      summary: '1-10',
      text: 'rate my answer on a scale of 1-10, where 1 is incorrect and 10 is most correct',
    },
    {
      summary: '1-5',
      text: 'rate my answer on a scale of 1-5, where 1 is incorrect and 5 is most correct',
    },
    { summary: 'none', text: '' },
  ];

const promptOptionsData = new PromptOptions(
        _voice, 
        _instruction, 
        _guardrail, 
        _summarize, 
        _COT, 
        _extractor
    )

export { promptOptionsData };




// below is deprecrated 12/31/2024 to replace Supabase

// import { PromptOptionsService } from "../services/promptOptionsService.js";

// console.log("Downloading prompt options from database...")


// let _voice = await PromptOptionsService.getVoice();
// let _instruction = await PromptOptionsService.getInstruction();
// let _guardrail = await PromptOptionsService.getGuardrail();
// let _summarize = await PromptOptionsService.getSummarize();
// let _COT = await PromptOptionsService.getCOT();
// let _extractor = await PromptOptionsService.getExtractor();

// const promptOptionsData = new PromptOptions(
    //     _voice, 
    //     _instruction, 
    //     _guardrail, 
    //     _summarize, 
    //     _COT, 
    //     _extractor
    // )