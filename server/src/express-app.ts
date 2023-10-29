import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', async (_req, res) => {
  res.status(200).json({ message: 'Connected successfully' });
});

export default app;
