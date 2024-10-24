// models
import { Problem } from '../models/problem';
import { ClientData } from '../models/clientData';

// openAI API config
import OpenAI from 'openai';
const openai = new OpenAI();
const API_KEY: string | undefined = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) {
    openai.apiKey = API_KEY; 
  } else {
    openai.apiKey = 'default string';
    console.error("error with API key or environment");
}

const model_choice = "gpt-4o";

const TextGeneratingService = {
    async generateText(clientData: ClientData, problemData: Problem, codePrompt: string, transcriptPrompt: string) {
        try {
            const temperature = clientData.promptData.temperature;
            const completion = await openai.chat.completions.create({
                temperature: temperature,
                messages: [
                    {"role": "system", "content": `${clientData.promptData.voice.text}. ${clientData.promptData.instruction.text}. ${clientData.promptData.guardrail.text}. ${clientData.promptData.summarize.text}. ${clientData.promptData.COT.text}. ${clientData.promptData.extractor.text}.`},
                    {"role": "user",   "content": `
                        this is the technical interview question: ${problemData.problem}. /n /n 
                        Here are the categories: ${problemData.categories}, /n /n
                        here are some examples of the input and output: ${problemData.example1}, ${problemData.example2}, ${problemData.example3}. /n /n
                        $${codePrompt}:  ${clientData.studentData.code}. /n /n
                        ${transcriptPrompt}:  ${clientData.studentData.transcript}
                    `}
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
