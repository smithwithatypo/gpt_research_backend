// services
import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';
import { ReadProblemService } from '../services/readProblemService.js';
// models
import { Problem } from '../models/problem.js';


const TextGeneratingController = {
    async getGeneratedTextPost(req: any, res: any) {
        try {

            const { studentCodeData, problemChoice, transcribedAudio } = req.body;
            const problemData: Problem | undefined = await ReadProblemService.getOneProblem(problemChoice);
            if (!problemData) {
                throw new Error('Failed to read problem data.');
            }

            const codePrompt = PromptGeneratingService.generateCodePrompt();
            const transcriptPrompt = PromptGeneratingService.generateTranscriptPrompt();
            const response = await TextGeneratingService.generateText(problemData, codePrompt, transcriptPrompt, transcribedAudio, studentCodeData);

            res.json({ success: true, data: response });


        } catch (error) {
            console.error('Error in TextGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate text." });
        }
    }
};

export { TextGeneratingController };
