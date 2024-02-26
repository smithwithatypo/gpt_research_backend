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

// Utility function to save text to a file
function saveTranscriptionToFile(text: string, filePath: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, (err) => {
      if (err) {
        console.error('Error saving transcription to file:', err);
        reject(err);
      } else {
        console.log(`Transcription saved to ${filePath}`);
        resolve(filePath);
      }
    });
  });
}

const AudioTranscriptionService = {
  async transcribeAudio(audioFilePath: any) { 
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(audioFilePath),
        model: "whisper-1",
        response_format: "verbose_json",
      });
    
      const savedFilePath = './temp/text/transcription.txt';        
      await saveTranscriptionToFile(transcription.text, savedFilePath);

      // console.log(transcription.text);    // for debugging
      return transcription.text;


    } catch (error) {
      console.error('Error transcribing audio:', error);
      console.error('Known issue: do NOT record audio in Safari. Use Chrome.')
      throw error;
    }
  }
};

  

export { AudioTranscriptionService }