import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// routes
import aiRoutes from './routes/aiRoutes.js';
import audioRoutes from './routes/audioRoutes.js';
import textRoutes from './routes/textRoutes.js';
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes
app.use('/api/ai', aiRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/text', textRoutes);
// listen to port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
