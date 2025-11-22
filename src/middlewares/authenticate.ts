import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

async function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req?.headers?.authorization?.split(' ')[1];
  next();
}

export default authenticate;
