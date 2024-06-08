const express = require('express');
const router = express.Router();
const baseController = require('../controllers');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument)); // http://localhost:8080/api-docs

router.get('/', baseController.redirect);
router.use('/accounts', require('./accounts'));
router.use('/account', require('./auth'));

module.exports = router;
