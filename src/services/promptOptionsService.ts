// deprecated 12/31/2024


// import supabase from "../utils/database.js";

// const PromptOptionsService = {

//     async getVoice() {
//         let { data, error } = await supabase
//         .from('Voice')
//         .select('summary, text')
//         return data
//     },
//     async getInstruction() {
//         let { data, error } = await supabase
//         .from('Instruction')
//         .select('summary, text')
//         return data
//     },
//     async getGuardrail() {
//         let { data, error } = await supabase
//         .from('Guardrail')
//         .select('summary, text')
//         return data
//     },
//     async getSummarize() {
//         let { data, error } = await supabase
//         .from('Summarize')
//         .select('summary, text')
//         return data
//     },
//     async getCOT() {
//         let { data, error } = await supabase
//         .from('COT')
//         .select('summary, text')
//         return data
//     },
//     async getExtractor() {
//         let { data, error } = await supabase
//         .from('Extractor')
//         .select('summary, text')
//         return data
//     }

// }

// export { PromptOptionsService };