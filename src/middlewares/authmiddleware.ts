import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { User, IUser } from '../models/User';

interface AuthenticatedRequest extends Request {
  user?: IUser;
}

const authenticate = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload | void;

      if (!decoded) {
        res.status(401).json({
          message: 'Not authorized, token failed'
        });
        return;
      }

      const userDocument = await User.findById(decoded.userId).select('-password');

      if (!userDocument) {
        res.status(401).json({
          message: 'User not found'
        });
        return;
      }

      req.user = userDocument.toObject() as IUser;

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({
        message: 'Not authorized, token failed'
      });
    }
  } else {
    res.status(401).json({
      message: 'Not authorized, no token. Please Login'
    });
  }
});

export { authenticate };
