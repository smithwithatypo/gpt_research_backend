var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();
const openai = new OpenAI();
const API_KEY = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) { // needed for typescript
    openai.apiKey = API_KEY;
}
else {
    openai.apiKey = 'default string';
}
// Utility function to save text to a file
function saveTranscriptionToFile(text, filePath) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, text, (err) => {
            if (err) {
                console.error('Error saving transcription to file:', err);
                reject(err);
            }
            else {
                console.log(`Transcription saved to ${filePath}`);
                resolve(filePath);
            }
        });
    });
}
const AudioTranscriptionService = {
    transcribeAudio(audioFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transcription = yield openai.audio.transcriptions.create({
                    file: fs.createReadStream(audioFilePath),
                    model: "whisper-1",
                    response_format: "verbose_json",
                });
                const savedFilePath = './temp/text/transcription.txt';
                yield saveTranscriptionToFile(transcription.text, savedFilePath);
                // console.log(transcription.text);    // for debugging
                return transcription.text;
            }
            catch (error) {
                console.error('Error transcribing audio:', error);
                console.error('Known issue: do NOT record audio in Safari. Use Chrome.');
                throw error;
            }
        });
    }
};
export { AudioTranscriptionService };
