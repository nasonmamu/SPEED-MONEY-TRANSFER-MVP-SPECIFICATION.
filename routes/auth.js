const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 
const auth = require('../middleware/auth') //add middleware

// Login route
router.post('/login', authController.login);

// Register route
router.post('/register', authController.register);

//add auth middleware to protect the get request
router.get('/logout', auth,authController.logout);

module.exports = router;
