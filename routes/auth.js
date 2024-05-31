const express = require('express');
const router = express.Router();
const User = require('../models/user');

// User login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(500).send();
  }
});

// User registration
router.post('/register', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
