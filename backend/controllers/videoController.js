const Video = require('../models/Video');

// Create a new video
const createVideo = async (req, res) => {
  const { title, thumbnailUrl, description, channelId } = req.body;
  const uploader = req.user.id; 

  try {
    const newVideo = new Video({ title, thumbnailUrl, description, channelId, uploader });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create video' });
  }
};

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('uploader', 'username').populate('channelId');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};

module.exports = { createVideo, getAllVideos };
