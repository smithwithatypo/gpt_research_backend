import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';

const TextGeneratingController = {
    async getGeneratedText(req, res) {
        try {
            const prompt = PromptGeneratingService.generatePrompt();
            console.log("prompt:", prompt)
            const response = await TextGeneratingService.generateText(prompt);
            console.log("generated text:", response)
            res.json({ success: true, data: response });
        } catch (error) {
            console.error('Error in TextGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate text." });
        }
    }
};

export { TextGeneratingController };
