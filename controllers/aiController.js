import OpenAIService from '../services/openaiService.js';

const AIController = {
  async getResponse(req, res) {
    // console.log("controller: ", req.body);
    const response = await OpenAIService.createResponse(req.body);
    // console.log("controller: ", response);  // for debugging
    res.json(response);
  }
};

const AITest = {        // test function
  async processText(req, res) {
    console.log("controller: ", req.body);
    res.json(req.body);
  }
};

export { AITest, AIController };