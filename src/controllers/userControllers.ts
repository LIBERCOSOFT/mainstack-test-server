import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { User, IUser } from '../models/User';
import generateToken from '../utils/generateToken';

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists: IUser | null = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user: IUser | null = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

});

export { createUser };