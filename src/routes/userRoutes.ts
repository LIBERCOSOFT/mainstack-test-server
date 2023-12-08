import express, { Router } from 'express';
const router: Router = express.Router();

import { createUser } from '../controllers/userControllers';

router.route('/').post(createUser);

export default router;