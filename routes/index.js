const express = require('express');
const auth = require('./auth');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const router = express.Router(); // Create a router instance

// Middleware for authentication
router.use(auth); // Use the auth middleware
router.use('/account', require('./auth'));

// Home route log in/out
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'); // http://localhost:8080
});

// Swagger route
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument)); // http://localhost:8080/api-docs


// Routes to other files
router.use('/accounts', require('./accounts')); // http://localhost:8080/accounts/

// Export the router
module.exports = router;
