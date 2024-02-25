import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { TextGeneratingService } from '../services/textGeneratingService.js';
import { PromptGeneratingService } from '../services/promptGeneratingService.js';

// Helper to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TextGeneratingController = {
    async getGeneratedText(req: any, res: any) {
        try {
            // read JSON file from ../savedJSONData/data.json
            const jsonFilePath = path.join(__dirname, '..', 'savedJSONData', 'data.json');
            const fileContents = await fs.readFile(jsonFilePath, 'utf8');
            const jsonData = JSON.parse(fileContents);
            const studentCodeData = jsonData.text;

            // get transcript data from ../transcriptions/transcript.txt
            const transcriptFilePath = path.join(__dirname, '..', 'transcriptions', 'transcription.txt');
            const transcriptContents = await fs.readFile(transcriptFilePath, 'utf8');
            const transcriptData = transcriptContents;
            
            const codePrompt = PromptGeneratingService.generateCodePrompt();
            const transcriptPrompt = PromptGeneratingService.generateTranscriptPrompt();
            const response = await TextGeneratingService.generateText(codePrompt, transcriptPrompt, transcriptData, studentCodeData);

            res.json({ success: true, data: response });
        } catch (error) {
            console.error('Error in TextGeneratingController:', error);
            res.status(500).json({ success: false, error: "Failed to generate text." });
        }
    }
};

export { TextGeneratingController };










// import { TextGeneratingService } from '../services/textGeneratingService.js';
// import { PromptGeneratingService } from '../services/promptGeneratingService.js';

// const TextGeneratingController = {
//     async getGeneratedText(req, res) {
//         try {
//             const prompt = PromptGeneratingService.generatePrompt();
//             const response = await TextGeneratingService.generateText(prompt, user_input);
//             res.json({ success: true, data: response });
//         } catch (error) {
//             console.error('Error in TextGeneratingController:', error);
//             res.status(500).json({ success: false, error: "Failed to generate text." });
//         }
//     }
// };

// export { TextGeneratingController };
