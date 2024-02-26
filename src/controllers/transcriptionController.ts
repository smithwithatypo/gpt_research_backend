import { AudioTranscriptionService } from '../services/transcriptionService.js';

const FILEPATH = "./temp/audio/audio.webm"

const TranscriptionController = {
    async getResponse(req: any, res: any) {
        const response = await AudioTranscriptionService.transcribeAudio(FILEPATH);  
        res.json(response);
    }
};



export { TranscriptionController };