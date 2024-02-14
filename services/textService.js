import OpenAI from 'openai';
const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI();
openai.apiKey = apiKey;


const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-0125-preview",
};

// change model here
const model_choice = model_options["3"];


const TextService = {
  async createResponse(user_input) {
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": `print this twice: ${user_input.text}`},
        ],
        model: model_choice,
      });
    
      return completion.choices[0].message.content;
    }
};


export default TextService;