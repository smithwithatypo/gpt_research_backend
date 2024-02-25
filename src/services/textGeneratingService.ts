import OpenAI from 'openai';
const openai = new OpenAI();

const API_KEY: string | undefined = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) {     // needed for typescript
    openai.apiKey = API_KEY; 
  } else {
    openai.apiKey = 'default string';
  }

  
const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-0125-preview",
};
const model_choice = model_options["3"];


const TextGeneratingService = {
    async generateText(codePrompt: string, transcriptPrompt: string, transcriptData: string, studentCodeData: string) {
        try {
            const completion = await openai.chat.completions.create({
                messages: [
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user",   "content": `${transcriptPrompt} : ${transcriptData}`},
                    {"role": "user",   "content": `${codePrompt} : ${studentCodeData}`},
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
