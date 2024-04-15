// services
import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';
import { ReadProblemService } from '../services/readProblemService.js';
// models
import { Problem } from '../models/problem.js';
import { ClientData } from '../models/clientData.js';


const TextGeneratingController = {
    async getGeneratedTextPost(req: any, res: any, next: any) {
        try {
            const clientData: ClientData = req.body;
            console.log('clientData:', clientData);  // delete. debug only
            // res.send('success');  // delete. debug only

            // const { datetime, studentCodeData, problemChoice, transcribedAudio, promptPerson, promptDifficulty } = req.body;
            const problemData: Problem | undefined = await ReadProblemService.getOneProblem(clientData.studentData.problemID);
            if (!problemData) { throw new Error('Failed to read problem data.') }
            const systemPrompt = PromptGeneratingService.generateSystemPrompt(clientData);
            const codePrompt = PromptGeneratingService.generateCodePrompt();
            const transcriptPrompt = PromptGeneratingService.generateTranscriptPrompt();

            const response = await TextGeneratingService.generateText(clientData, problemData, systemPrompt, codePrompt, transcriptPrompt);
            res.status(200).json({ success: true, data: response });
            
            // res.locals.generatedText = response;  // for analytics middleware
            // next(); // calls analytics middleware

        } catch (error) {
            console.error('Error in TextGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate text." });
        }
    }
};

export { TextGeneratingController };
