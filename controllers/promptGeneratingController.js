
import { PromptGeneratingService } from './services/PromptGeneratingService.js';

const PromptGeneratingController = {
    getPrompt(req, res) {
        try {
            const prompt = PromptGeneratingService.generatePrompt();
            res.json({ success: true, data: prompt });
        } catch (error) {
            console.error('Error in PromptGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate prompt." });
        }
    }
};
export { PromptGeneratingController };
