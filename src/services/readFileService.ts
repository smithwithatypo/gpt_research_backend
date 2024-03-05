import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Deriving __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ReadFileService {
    // Assuming __dirname can be resolved or using an alternative approach in ES modules
    private static basePath = path.join(__dirname, '..', '..', '..', 'temp');

    static async readCodeData(): Promise<string> {
        const jsonFilePath = path.join(this.basePath, 'json', 'data.json');
        try {
            const fileContents = await fs.readFile(jsonFilePath, 'utf8');
            const jsonData = JSON.parse(fileContents);
            return jsonData.text; // Assuming jsonData.text contains the code data
        } catch (error) {
            console.error('Error reading code data file:', error);
            throw new Error('Failed to read code data.');
        }
    }

    static async readTranscriptData(): Promise<string> {
        const transcriptFilePath = path.join(this.basePath, 'text', 'transcription.txt');
        try {
            const transcriptContents = await fs.readFile(transcriptFilePath, 'utf8');
            return transcriptContents;
        } catch (error) {
            console.error('Error reading transcript file:', error);
            throw new Error('Failed to read transcript data.');
        }
    }
}

export { ReadFileService };
