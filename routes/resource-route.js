const resourceController = require('../controllers/resource-controller.js');
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /resource:
 *  post:
 *    summary: Create a resource
 *    description: Create a resource for server
 *    tags:
 *      - resource
 *    responses:
 *      '200':
 *        description: OK
 *  get:
 *    summary: Retrieve all resources
 *    description: Retrieves all the resources on the server
 *    tags:
 *      - resource
 *    responses:
 *      '200':
 *        description: OK
 */
router.post('/', resourceController.createResource);
router.get('/', resourceController.getResource);

/**
 * @swagger
 * /resource/{id}:
 *  get:
 *    summary: Retrieve a single resource
 *    description: Retrieves a resource
 *    tags:
 *      - resource
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       description: Numeric ID of resource to get
 *    responses:
 *      '200':
 *        description: OK
 *      '400':
 *        description: Bad Request
 *  put:
 *    summary: Update a single resource
 *    description: Update a resource
 *    tags:
 *      - resource
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       description: Numeric ID of resource to get
 *    responses:
 *      '200':
 *        description: OK
 *      '400':
 *        description: Bad Request
 *  delete:
 *    summary: Delete a single resource
 *    description: Marks a resource as deleted
 *    tags:
 *      - resource
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: integer
 *       description: Numeric ID of resource to get
 *    responses:
 *      '200':
 *        description: OK
 *      '400':
 *        description: Bad Request
 */
router.get('/:id', resourceController.getResourceById);
router.put('/:id', resourceController.updateResourceById);
router.delete('/:id', resourceController.deleteResourceById);

module.exports = router;
