const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
  },
  channelBanner: {
    type: String,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
  }],
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
