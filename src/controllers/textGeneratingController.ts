// services
import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';
import { ReadProblemService } from '../services/readProblemService.js';
// models
import { Problem } from '../models/problem.js';


const TextGeneratingController = {
    async getGeneratedTextPost(req: any, res: any, next: any) {
        try {
            const { datetime, studentCodeData, problemChoice, transcribedAudio, promptPerson, promptDifficulty } = req.body;
            const problemData: Problem | undefined = await ReadProblemService.getOneProblem(problemChoice);
            if (!problemData) { throw new Error('Failed to read problem data.') }
            const systemPrompt = PromptGeneratingService.generateSystemPrompt(promptPerson, promptDifficulty);
            const codePrompt = PromptGeneratingService.generateCodePrompt();
            const transcriptPrompt = PromptGeneratingService.generateTranscriptPrompt();

            const response = await TextGeneratingService.generateText(problemData, systemPrompt, codePrompt, transcriptPrompt, transcribedAudio, studentCodeData);
            res.status(200).json({ success: true, data: response });
            
            res.locals.generatedText = response;  // for analytics middleware
            next(); // calls analytics middleware

        } catch (error) {
            console.error('Error in TextGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate text." });
        }
    }
};

export { TextGeneratingController };
