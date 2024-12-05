import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import studentRoutes from './routes/student.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', authRoutes);
app.use('/', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});