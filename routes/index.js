const express = require('express');
const config = require('../controllers/authConfig'); 
const auth = require('./auth'); // Adjust the path as necessary
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const router = express.Router(); // Create a router instance

router.use(auth); // Use the auth middleware

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument)); // http://localhost:8080/api-docs

router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.use('/accounts', require('./accounts'));
router.use('/account', require('./auth'));

// Export the router
module.exports = router;
