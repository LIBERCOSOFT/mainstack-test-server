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
      message: 'Product Added Successfully',
      data: newProduct
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
});

const getOneProduct = asyncHandler(async (req: Request, res: Response) => {
  const id = req.query.id as string;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({
        message: 'Product not found'
      });
      return;
    }
    res.status(200).json({
      message: 'Product Found',
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
});

const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: 'All products retrieved',
      data: products
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
});

const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  const id = req.query.id as string;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      res.status(404).json({
        message: 'Product not found'
      });
      return;
    }
    res.status(200).json({
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
});

const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const id = req.query.id as string;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({
        message: 'Product not found'
      });
      return;
    }
    res.json({
      message: 'Product successfully deleted',
    });
    res.status(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
});

export { createProduct, getOneProduct, getAllProducts, updateProduct, deleteProduct };