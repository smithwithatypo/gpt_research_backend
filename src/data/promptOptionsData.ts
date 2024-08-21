import { PromptOptions } from "../models/promptOptions.js";
import { PromptOptionsService } from "../services/promptOptionsService.js";

console.log("Downloading prompt options from database...")

let _voice = await PromptOptionsService.getVoice();
let _instruction = await PromptOptionsService.getInstruction();
let _guardrail = await PromptOptionsService.getGuardrail();
let _summarize = await PromptOptionsService.getSummarize();
let _COT = await PromptOptionsService.getCOT();
let _extractor = await PromptOptionsService.getExtractor();
    
const promptOptionsData = new PromptOptions(
    _voice, 
    _instruction, 
    _guardrail, 
    _summarize, 
    _COT, 
    _extractor
)

export { promptOptionsData };