const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/accounts');
const { requiresAuth } = require('express-openid-connect');


router.get('/', requiresAuth(), contactsController.getAllAccounts); // http://localhost:8080/accounts
router.get('/:id', requiresAuth(), contactsController.getSingleAccount);
router.post('/', contactsController.createAccount);
router.put('/:id', requiresAuth(), contactsController.updateAccount);
router.delete('/:id', contactsController.deleteAccount);
// router.patch('/admin/:id', contactsController.adminupdateAccount);

module.exports = router;
