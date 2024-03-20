import fs from 'fs';
import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI();
const API_KEY: string | undefined = process.env.OPENAI_API_KEY;
if (API_KEY !== undefined) {     // needed for typescript
    openai.apiKey = API_KEY; 
  } else {
    openai.apiKey = 'default string';
  }


const AudioTranscriptionService = {
  async transcribeAudio(audioFilePath: string) { 
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(audioFilePath),
        model: "whisper-1",
        response_format: "verbose_json",
      });
      return transcription.text;

    } catch (error) {
      console.error('Error transcribing audio:', error);
      console.error('Known issue: do NOT record audio in Safari. Use Chrome, Firefox, or Edge.')
      throw error;
    }
  }
};

  

export { AudioTranscriptionService }