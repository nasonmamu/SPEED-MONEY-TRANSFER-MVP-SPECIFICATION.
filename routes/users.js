const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

// Fetch user profile
router.get('/profile', auth, async (req, res) => {
  res.send(req.user);
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'email'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send({ message: 'Profile updated successfully!' });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
