const express = require('express');
const { createVideo, getAllVideos } = require('../controllers/videoController');
const { authenticate } = require('../middleware/auth'); 
const router = express.Router();

// Create Video Route
router.post('/', authenticate, createVideo);

// Get All Videos Route
router.get('/', getAllVideos);

module.exports = router;
