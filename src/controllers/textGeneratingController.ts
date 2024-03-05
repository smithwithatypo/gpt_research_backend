// services
import { ReadFileService } from '../services/readFileService.js'; 
import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';
import { ReadProblemService } from '../services/readProblemService.js';
// models
import { Problem } from '../models/problem.js';


const TextGeneratingController = {
    async getGeneratedText(req: any, res: any) {
        try {
            const problemData: Problem | undefined = await ReadProblemService.readProblemData();  // req.choice: string
            if (!problemData) {
                throw new Error('Failed to read problem data.');
            }

            const studentCodeData = await ReadFileService.readCodeData();
            const transcriptData = await ReadFileService.readTranscriptData();

            const codePrompt = PromptGeneratingService.generateCodePrompt();
            const transcriptPrompt = PromptGeneratingService.generateTranscriptPrompt();

            const response = await TextGeneratingService.generateText(problemData, codePrompt, transcriptPrompt, transcriptData, studentCodeData);

            res.json({ success: true, data: response });


        } catch (error) {
            console.error('Error in TextGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate text." });
        }
    }
};

export { TextGeneratingController };
