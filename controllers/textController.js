import TextService from '../services/textService.js';

const TextController = {
  async getResponse(req, res) {
    // console.log("controller: ", req.body);
    const response = await TextService.createResponse(req.body);
    console.log("controller: ", response);  // for debugging
    res.json(response);
  }
};

// const AITest = {
//   async processText(req, res) {
//     console.log("controller: ", req.body);
//     res.json(req.body);
//   }
// };

export { TextController };