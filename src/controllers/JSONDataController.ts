import { JSONStorageService } from '../services/JSONStorageService.js';

const JSONDataController = {
  async saveJSON(req: any, res: any) {
    try {
      const message = await JSONStorageService.saveJSONToFile(req.body);
      res.json({ success: true, message });
    } catch (error) {
      console.error('Error saving JSON to file:', error);
      res.status(500).json({ success: false, error: "Error saving JSON data" });
    }
  }
};

export { JSONDataController };
