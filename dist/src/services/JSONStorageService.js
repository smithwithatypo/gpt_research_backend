import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
class JSONStorageService {
    static saveJSONToFile(jsonData, filename = 'data.json') {
        return new Promise((resolve, reject) => {
            const dirPath = path.join(__dirname, '..', 'savedJSONData');
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
            const filePath = path.join(__dirname, '..', 'savedJSONData', filename);
            const jsonString = JSON.stringify(jsonData, null, 2); // pretty print with 2 spaces
            fs.writeFile(filePath, jsonString, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve('JSON data saved successfully');
                }
            });
        });
    }
}
export { JSONStorageService };
