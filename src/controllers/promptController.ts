import { PromptOptionsService } from '../services/promptOptionsService.js';


const PromptController = {
  async getPromptOptions(req: any, res: any) {
    try {
        const COT: any = await PromptOptionsService.getCOT();
        res.json({ success: true, data: COT });
    } catch (error) {
        console.error('Error in PromptController:', error);
        res.status(500).json({ success: false, error: "Failed to get prompt options." });
    }
  },
}

export { PromptController }