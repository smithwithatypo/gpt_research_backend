var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// services
import { ReadFileService } from '../services/readFileService.js';
import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';
import { ReadProblemService } from '../services/readProblemService.js';
const TextGeneratingController = {
    getGeneratedText(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const problemData = yield ReadProblemService.readProblemData(); // req.choice: string
                if (!problemData) {
                    throw new Error('Failed to read problem data.');
                }
                const studentCodeData = yield ReadFileService.readCodeData();
                const transcriptData = yield ReadFileService.readTranscriptData();
                const codePrompt = PromptGeneratingService.generateCodePrompt();
                const transcriptPrompt = PromptGeneratingService.generateTranscriptPrompt();
                const response = yield TextGeneratingService.generateText(problemData, codePrompt, transcriptPrompt, transcriptData, studentCodeData);
                res.json({ success: true, data: response });
            }
            catch (error) {
                console.error('Error in TextGeneratingController:', error);
                res.status(500).json({ success: false, error: "Failed to generate text." });
            }
        });
    }
};
export { TextGeneratingController };
