import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import cookieAssignment from './middleware/cookieAssignment.js';

// routes
import aiRoutes from './routes/aiRoutes.js';
import audioRoutes from './routes/audioRoutes.js';
import problemRoutes from './routes/problemRoutes.js';

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'https://gptresearchfrontend.web.app/',
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cookieAssignment);

// routes
app.use('/api/ai', aiRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/problems', problemRoutes);

// listen to port
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
  