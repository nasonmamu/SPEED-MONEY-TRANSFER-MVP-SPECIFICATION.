const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth'); // Add authentication middleware
const upload = require('../middleware/upload');


// Get user profile (protected)
router.get('/profile', auth, userController.getProfile);

// Update user profile (protected)
router.put('/profile',auth,upload.single('profilePicture'), userController.updateProfile);

module.exports = router;
