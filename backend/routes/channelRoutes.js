const express = require('express');
const { createChannel, getChannel, updateChannel, deleteChannel } = require('../controllers/channelController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Create Channel
router.post('/', authenticate, createChannel);

// Get Channel by ID
router.get('/:id', getChannel);

// Update Channel
router.put('/:id', authenticate, updateChannel);

// Delete Channel
router.delete('/:id', authenticate, deleteChannel);

module.exports = router;
