import { AudioTranscriptionService } from '../services/audioService.js';

const AudioController = {
    async getResponse(req, res) {
        // console.log("controller: ", req.body);
        const response = await AudioTranscriptionService.transcribeAudio(req.body);
        console.log("controller: ", response);  // for debugging
        // await console.log("controller: ", req.body);  // for debugging
        res.json(response);
    }
};



export { AudioController };