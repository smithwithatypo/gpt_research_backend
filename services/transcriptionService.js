import fs from 'fs';
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const AudioTranscriptionService = {
  async transcribeAudio(audioFilePath) { 
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(audioFilePath),
        model: "whisper-1",
        response_format: "verbose_json",
      });
    
      console.log(transcription.text);
      return transcription.text;


    } catch (error) {
      console.error('Error transcribing audio:', error);
      console.error('Known bug: do NOT record audio in Safari. Use Chrome.')
      throw error;
    }
  }
};

  

export { AudioTranscriptionService }