///////////// TODO:  change to grab file from /uploads folder


import axios from 'axios';
import fs from 'fs';

const apiKey = process.env.OPENAI_API_KEY;

const AudioTranscriptionService = {
    async transcribeAudio(audioFilePath) {   // breaks here:  The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of Object
      try {
        // Read the audio file
        const audioFile = fs.readFileSync(audioFilePath);
  
        // Make a POST request to the Whisper API
        const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', {
          audio: audioFile.toString('base64'),
          language: 'en',
          format: 'webm',
        }, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
  
        // Get the transcription result
        const transcription = response.data.transcription;
  
        return transcription;
      } catch (error) {
        console.error('Error transcribing audio:', error);
        throw error;
      }
    }
  };
  

export { AudioTranscriptionService }