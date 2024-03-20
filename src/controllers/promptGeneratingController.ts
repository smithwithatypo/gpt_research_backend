import { PromptGeneratingService } from '../services/promptGeneratingService.js';

const PromptGeneratingController = {
    getCodePrompt(req: any, res: any) {
        try {
            const prompt = PromptGeneratingService.generateCodePrompt();
            res.json({ success: true, data: prompt });
        } catch (error) {
            console.error('Error in PromptGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate prompt." });
        }
    },

    getTranscriptPrompt(req: any, res: any) {
        try {
            const prompt = PromptGeneratingService.generateTranscriptPrompt();
            res.json({ success: true, data: prompt });
        } catch (error) {
            console.error('Error in PromptGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate prompt." });
        }
    }
};




export { PromptGeneratingController };
