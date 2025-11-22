import express from 'express';
import resourceController from '../controllers/resource.controller';

const router = express.Router();

router.post('/', resourceController.createResource);
router.get('/', resourceController.getResources);
router.get('/:id', resourceController.getResource);
router.put('/:id', resourceController.updateResource);
router.delete('/:id', resourceController.deleteResource);

export default router;
