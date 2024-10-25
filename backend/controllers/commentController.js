const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const { videoId, text } = req.body;
    const comment = new Comment({
      videoId,
      userId: req.user.id,
      text,
    });
    await comment.save();
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { videoId } = req.query; 
    const comments = await Comment.find({ videoId }).populate('userId', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    if (comment.userId.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    await comment.remove();
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comment', error });
  }
};
