import { Request, Response, NextFunction } from 'express';

function handleNotFound(req: Request, res: Response, next: NextFunction) {
  return res.sendStatus(404);
}

function handleServerError(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err)
  return res.sendStatus(500);
}

export default {
  handleNotFound,
  handleServerError,
};
