import { AudioTranscriptionService } from '../services/transcriptionService.js';

const FILEPATH = "./temp/audio/audio.webm"

const TranscriptionController = {
    async getResponse(req: any, res: any) {
        console.log(`${req.file.size / 1000} KB audio file uploaded`); 
        const response = await AudioTranscriptionService.transcribeAudio(FILEPATH);  
        res.json(response);
    }
};



export { TranscriptionController };