import { Request, Response, NextFunction } from 'express';
import resourceService from '../services/resource.service';

async function createResource(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(201).json({});
  } catch (err) {
    next(err);
  }
}

async function getResources(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(200).json({});
  } catch (err) {
    next(err);
  }
}

async function getResource(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(200).json({});
  } catch (err) {
    next(err);
  }
}

async function updateResource(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(200).json({});
  } catch (err) {
    next(err);
  }
}

async function deleteResource(req: Request, res: Response, next: NextFunction) {
  try {
    return res.status(200).json({});
  } catch (err) {
    next(err);
  }
}

export default {
  createResource,
  getResources,
  getResource,
  updateResource,
  deleteResource,
};
