const express = require('express');
const { auth } = require('express-openid-connect');
require('dotenv').config(); // Load environment variables from .env file

const router = express.Router(); // Create a router instance

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_KEY, // Use the environment variable ,
  baseURL: 'http://localhost:8080',
  clientID: 'Uy0f9yOhBQheQi0Ni2rfKvv8p2jv3EEy',
  issuerBaseURL: 'https://dev-0vx7xmqpl008lhl6.us.auth0.com'
};

router.use(auth(config)); // Use the auth middleware

// req.isAuthenticated is provided from the auth router
// router.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

module.exports = router; // Export the router
