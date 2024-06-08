const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
const { requiresAuth } = require('express-openid-connect');



router.get('/', contactsController.getAllContacts); // http://localhost:8080/contacts
router.get('/:id', contactsController.getSingle);
router.post('/', contactsController.createContact);
router.put('/account/:id', requiresAuth(), contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);
router.patch('/admin/:id', contactsController.adminUpdateContact);

module.exports = router;
