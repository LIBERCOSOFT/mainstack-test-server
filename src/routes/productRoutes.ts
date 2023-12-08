import express, { Router } from 'express';
const router: Router = express.Router();

import { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } from '../controllers/productControllers';

import { authenticate } from '../middlewares/authmiddleware';

router.route('/one').get(authenticate, getOneProduct)
  .put(authenticate, updateProduct)
  .delete(authenticate, deleteProduct);

router.route('/').post(authenticate, createProduct)
  .get(authenticate, getAllProducts);

export default router;