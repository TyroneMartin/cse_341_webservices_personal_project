const express = require('express');
const { auth } = require('express-openid-connect');
const config = require('../controllers/authConfig');

const router = express.Router(); // Create a router instance

router.use(auth(config)); // Use the auth middleware

// Export the router
module.exports = router;
