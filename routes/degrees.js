const express = require('express');
const router = express.Router();
const degreeController = require('../controllers/degrees');
const { requiresAuth } = require('express-openid-connect');


// Routes for degrees controller
router.get('/', requiresAuth(), degreeController.getAlldegrees); // http://localhost:8080/degrees
router.delete('/:id', degreeController.deleteDegree);

module.exports = router;
