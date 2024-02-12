import OpenAI from 'openai';
const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI();
openai.apiKey = apiKey;

const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-0125-preview",
}
const model_choice = model_options["3"]       // change model here




// const button_choices = {
//     "sentence": "summarize this topic in one sentence: ",
//     "paragraph": "summarize this topic in 3 sentences: ",
//     "analogyMe": `give me an analogy for this topic. Try to use a random example from my background in ${my_background}: `,
//     "analogyKid": "give me an analogy for this topic that a 12 year old would understand: ",
// }

const OpenAIService = {
  async createResponse(prompt) {
    // let choice = button_choices[prompt.button_choice];
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": `${prompt.text}`},
        ],
        model: model_choice,
      });
    
      return completion.choices[0].message.content;
    }
};


export default OpenAIService;