const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration
router.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
});

// User login (simplified for demonstration purposes)
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (user) {
        res.json(user);
    } else {
        res.status(400).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
