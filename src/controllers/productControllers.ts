import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import Product from '../models/Product';

const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const { name, price, description, quantity, category } = req.body;

  try {
    const newProduct = new Product({
      name, price, description, quantity, category
    });
    await newProduct.save();
    res.status(201).json({
      message: "Product Added Successfully",
      data: newProduct
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export { createProduct };