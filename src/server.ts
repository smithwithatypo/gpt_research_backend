import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// routes
import aiRoutes from './routes/aiRoutes.js';
import audioRoutes from './routes/audioRoutes.js';
import problemRoutes from './routes/problemRoutes.js';
import promptRoutes from './routes/promptRoutes.js'
const app = express();
const port = 3000;

const corsOptions = {
  // origin: 'https://gptresearchfrontend.web.app',  // prod only
  origin: 'http://localhost:4200',  // dev only
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/ai', aiRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/promptOptions', promptRoutes)

// listen to port
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
  