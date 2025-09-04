import resourceService from '../services/resourceService';
import express from 'express';

const router = express.Router();

router.post('/', async (req, res, next) => {
  // const { title, text } = req.body ?? {};
  try {
    return res.status(201).json({
      message: "CREATE A RESOURCE",
    });
  } catch (e) {
    next(e);
  }
});

router.get('/', async (req, res, next) => {
  // Filtering and Pagination
  try {
    const resources = await resourceService.getResources();
    return res.json({
      message: "GET ALL RESOURCE",
      data: {
        resources
      }
    });
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params ?? {};
  try {
    return res.status(200).json({
      message: `GET A RESOURCE BY ID ${id}`
    });
  } catch (e) {
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params ?? {};
  try {
    return res.status(200).json({
      message: `UPDATE A RESOURCE BY ID ${id}`
    });
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params ?? {};
  try {
    return res.status(200).json({
      message: `DELETE A RESOURCE BY ID ${id}`,
    });
  } catch (e) {
    next(e);
  }
});

export default router;
