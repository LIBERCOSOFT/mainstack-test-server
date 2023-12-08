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

const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: IUser | null = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    interface ResponsePayload {
      _id: any;
      name: string;
      email: string;
      token?: string;
    }

    const resPayload: ResponsePayload = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };


    if (process.env.NODE_ENV === 'development') {
      resPayload.token = "JWT token saved in cookie";
    }

    res.json(resPayload);
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

export { createUser, authUser, logoutUser };