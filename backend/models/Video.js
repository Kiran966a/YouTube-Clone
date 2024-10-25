const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  description: { type: String, required: true },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
