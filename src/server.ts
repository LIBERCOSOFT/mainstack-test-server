import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

import productRoutes from './routes/productRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 5050;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', productRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});