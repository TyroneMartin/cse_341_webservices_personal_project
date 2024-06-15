require('dotenv').config(); // Load environment variables from .env file

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_KEY, // Use the environment variable
  baseURL: 'https://cse-341-webservices-personal-project.onrender.com',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

module.exports = config; // Export the config object
