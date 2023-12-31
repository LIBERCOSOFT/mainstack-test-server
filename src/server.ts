import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/db';

import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 5050;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});