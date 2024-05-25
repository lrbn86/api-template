const resourceController = require('../controllers/resource-controller.js');
const express = require('express');
const router = express.Router();

router.get('/resource', resourceController.getResource);

module.exports = router;
