import express, { Router } from 'express';
const router: Router = express.Router();

import { createProduct } from '../controllers/productControllers';

router.route('/').post(createProduct);

export default router;