// models
import { Problem } from '../models/problem';

// openAI API config
import OpenAI from 'openai';
const openai = new OpenAI();
import dotenv from 'dotenv';
dotenv.config();

const API_KEY: string | undefined = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) {
    openai.apiKey = API_KEY; 
  } else {
    openai.apiKey = 'default string';
    console.error("error with API key or environment");
}


// choose openAI GPT model
const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-turbo-preview"
};
const model_choice = model_options["3"];
const temperature = 0.1;    // range 0.0 to 2.0, higher being more random


const TextGeneratingService = {
    async generateText(problemData: Problem, systemPrompt: string, codePrompt: string, transcriptPrompt: string, transcriptData: string, studentCodeData: string) {
        try {
            const completion = await openai.chat.completions.create({
                temperature: temperature,
                messages: [
                    // {"role": "system", "content": `Be a senior software engineer who evaluates new software engineers for explaining their programmatic solutions to the following technical interview question. Summarize in one paragraph. Do not give solutions. If they are wrong, only reply with one paragraph of guidance.`},
                    {"role": "system", "content": `${systemPrompt}. Summarize in one paragraph. Do not give solutions. If they are wrong, then only reply with one paragraph of guidance.`},
                    {"role": "user",   "content": `this is the technical interview question: ${problemData.problem}. /n /n Here are the categories: ${problemData.categories}, here are some examples of the input and output: ${problemData.example1}, ${problemData.example2}, ${problemData.example3}`},
                    {"role": "user",   "content": `${codePrompt}:  ${studentCodeData}`},
                    {"role": "user",   "content": `${transcriptPrompt}:  ${transcriptData}`},
                ],
                model: model_choice,
              });
              return completion.choices[0].message.content;
        } catch (error) {
            console.error('Error generating text:', error);
            throw error; 
        }
    }
};

export { TextGeneratingService };
