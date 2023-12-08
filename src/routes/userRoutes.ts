import express, { Router } from 'express';
const router: Router = express.Router();

import { createUser, authUser, logoutUser } from '../controllers/userControllers';

router.route('/').post(createUser);
router.route('/auth').post(authUser);
router.route('/logout').post(logoutUser);

export default router;