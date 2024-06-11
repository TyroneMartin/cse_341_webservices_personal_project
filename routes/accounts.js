const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/accounts');
const { requiresAuth } = require('express-openid-connect');


router.get('/', contactsController.getAllAccounts); // http://localhost:8080/accounts
router.get('/:id', contactsController.getSingleAccount);
router.post('/', contactsController.createAccount);
router.put('/:id', contactsController.updateAccount);
router.delete('/:id', contactsController.deleteAccount);
// router.patch('/admin/:id', contactsController.adminupdateAccount);

module.exports = router;
