import OpenAI from 'openai';
const openai = new OpenAI();
openai.apiKey = process.env.OPENAI_API_KEY;

const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-0125-preview",
};
const model_choice = model_options["3"];


const TextGeneratingService = {
    async generateText(codePrompt, transcriptPrompt, transcriptData, studentCodeData) {
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
