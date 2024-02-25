var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import OpenAI from 'openai';
const openai = new OpenAI();
const API_KEY = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) { // needed for typescript
    openai.apiKey = API_KEY;
}
else {
    openai.apiKey = 'default string';
}
const model_options = {
    "3": "gpt-3.5-turbo",
    "4": "gpt-4-0125-preview",
};
const model_choice = model_options["3"];
const TextGeneratingService = {
    generateText(codePrompt, transcriptPrompt, transcriptData, studentCodeData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const completion = yield openai.chat.completions.create({
                    messages: [
                        { "role": "system", "content": "You are a helpful assistant." },
                        { "role": "user", "content": `${transcriptPrompt} : ${transcriptData}` },
                        { "role": "user", "content": `${codePrompt} : ${studentCodeData}` },
                    ],
                    model: model_choice,
                });
                return completion.choices[0].message.content;
            }
            catch (error) {
                console.error('Error generating text:', error);
                throw error;
            }
        });
    }
};
export { TextGeneratingService };
