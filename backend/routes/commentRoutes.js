const express = require('express');
const { addComment, getComments, deleteComment } = require('../controllers/commentController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Add Comment
router.post('/', authenticate, addComment);

// Get Comments for a Video 
router.get('/', getComments);

// Delete Comment
router.delete('/:id', authenticate, deleteComment);

module.exports = router;
