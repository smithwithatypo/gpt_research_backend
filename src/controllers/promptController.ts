import { promptOptionsData } from '../data/promptOptionsData.js';


const PromptController = {

  async getPromptOptions(req: any, res: any) {
    try {
        res.json({ success: true, data: promptOptionsData });
    } catch (error) {
        console.error('Error in PromptController:', error);
        res.status(500).json({ success: false, error: "Failed to get prompt options." });
    }
  },

}

export { PromptController }