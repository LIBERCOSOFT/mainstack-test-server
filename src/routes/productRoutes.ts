import express, { Router } from 'express';
const router: Router = express.Router();

import { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } from '../controllers/productControllers';

router.route('/one').get(getOneProduct)
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/').post(createProduct)
  .get(getAllProducts);

export default router;