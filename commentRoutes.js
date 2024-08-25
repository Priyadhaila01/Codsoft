const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');

// Add Comment
router.post('/:postId', async (req, res) => {
    const { content } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    const newComment = new Comment({ content, author: decoded.userId, post: req.params.postId });
    await newComment.save();
    res.status(201).json(newComment);
});

module.exports = router;
