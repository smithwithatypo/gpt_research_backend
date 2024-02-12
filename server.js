// import pg from 'pg';  // postgresql tool
// import config from './dbconfig.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import aiRoutes from './routes/aiRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/ai', aiRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
  