import { AudioTranscriptionService } from '../services/transcriptionService.js';

const TranscriptionController = {
    async getResponse(req, res) {
        const response = await AudioTranscriptionService.transcribeAudio("./uploads/audio.webm");
        res.json(response);
    }
};



export { TranscriptionController };