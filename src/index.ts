// src/index.ts
import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
