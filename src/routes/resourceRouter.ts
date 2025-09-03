import * as resource from '../models/resource';
import express from 'express';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    return res.json({
      message: "CREATE A RESOURCE",
    });
  } catch (e) {
    next(e);
  }
});

router.get('/', async (req, res, next) => {
  try {
    return res.json({
      message: "GET ALL RESOURCE",
      data: {
        resource: resource.getResource()
      }
    });
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json({
        message: 'Id path parameter required'
      });
    }
    return res.status(200).json({
      message: 'GET A RESOURCE BY ID'
    });
  } catch (e) {
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json({
        message: 'Id path parameter required'
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json({
        message: 'Id path parameter required'
      });
    }
    return res.status(200).json({
      message: 'DELETE A RESOURCE BY ID'
    });
  } catch (e) {
    next(e);
  }
});

export default router;
