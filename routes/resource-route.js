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
 */
router.post('/', (req, res) => {
  return res.json({
    message: "CREATE A RESOURCE"
  });
});

/**
 * @swagger
 * /resource:
 *  get:
 *    summary: Retrieve all resources
 *    description: Retrieves all the resources on the server
 *    tags:
 *      - resource
 *    responses:
 *      '200':
 *        description: OK
 */
router.get('/', (req, res) => {
  return res.json({
    message: "GET ALL RESOURCE"
  });
});

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
 */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: 'Id path parameter required'
    });
  }
  return res.status(200).json({
    message: 'GET A RESOURCE BY ID'
  });
});

/** 
 * @swagger
 * /resource/{id}:
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
 */
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: 'Id path parameter required'
    });
  }
});

/**
 * @swagger
 * /resource/{id}:
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
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: 'Id path parameter required'
    });
  }
  return res.status(200).json({
    message: 'DELETE A RESOURCE BY ID'
  });
});

module.exports = router;
