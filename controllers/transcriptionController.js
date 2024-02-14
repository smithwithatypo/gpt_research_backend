import { AudioTranscriptionService } from '../services/transcriptionService.js';

const TranscriptionController = {
    async getResponse(req, res) {
        // console.log("controller: ", req.body);
        const response = await AudioTranscriptionService.transcribeAudio("./uploads/audio.webm");
        // console.log("controller: ", response);  // for debugging
        // await console.log("controller: ", req.body);  // for debugging
        res.json(response);
    }
};



export { TranscriptionController };