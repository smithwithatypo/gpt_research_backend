// models
import { Problem } from '../models/problem';


// openAI API config
import OpenAI from 'openai';
const openai = new OpenAI();
import dotenv from 'dotenv';
dotenv.config();

const API_KEY: string | undefined = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) {     // needed for typescript
    openai.apiKey = API_KEY; 
  } else {
    openai.apiKey = 'default string';
}


// choose openAI GPT model
const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-0125-preview",
};
const model_choice = model_options["3"];


// service
const TextGeneratingService = {
    async generateText(problemData: Problem, codePrompt: string, transcriptPrompt: string, transcriptData: string, studentCodeData: string) {
        try {
            // console.log(problemData);
            const completion = await openai.chat.completions.create({
                messages: [
                    {"role": "system", "content": `Be a senior software engineer who evaluates new software engineers for explaining their programmatic solutions to the following technical interview question. Summarize in one paragraph.`},
                    {"role": "user",   "content": `this is the technical interview question : ${problemData.problem}, here are the categories: ${problemData.categories}, here are some examples of the input and output: ${problemData.example1}, ${problemData.example2}, ${problemData.example3}`},
                    {"role": "user",   "content": `${codePrompt} : ${studentCodeData}`},
                    {"role": "user",   "content": `${transcriptPrompt} : ${transcriptData}`},
                ],
                model: model_choice,
              });
            
            //   console.log(completion.choices[0].message.content);
              return completion.choices[0].message.content;
        } catch (error) {
            console.error('Error generating text:', error);
            throw error; 
        }
    }
};

export { TextGeneratingService };
