const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accounts');
const { requiresAuth } = require('express-openid-connect');


// Routes for accounts controller
router.get('/', requiresAuth(), accountController.getAllAccounts); // http://localhost:8080/accounts
router.get('/:id', accountController.getSingleAccount);
router.post('/', accountController.createAccount);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);

// router.patch('/admin/:id', accountController.adminupdateAccount);

module.exports = router;
