require('dotenv').config(); // Load environment variables from .env file

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_KEY, // Use the environment variable
  baseURL: 'https://cse-341-webservices-personal-project.onrender.com',
  clientID: 'Uy0f9yOhBQheQi0Ni2rfKvv8p2jv3EEy',
  issuerBaseURL: 'https://dev-0vx7xmqpl008lhl6.us.auth0.com'
};

module.exports = config; // Export the config object
