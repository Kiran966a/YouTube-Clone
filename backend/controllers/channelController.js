const Channel = require('../models/Channel');

exports.createChannel = async (req, res) => {
  try {
    const { channelName, description, channelBanner } = req.body;
    const channel = new Channel({
      channelName,
      owner: req.user.id,
      description,
      channelBanner,
    });
    await channel.save();
    res.status(201).json({ message: 'Channel created successfully', channel });
  } catch (error) {
    res.status(500).json({ message: 'Error creating channel', error });
  }
};

exports.getChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate('owner', 'username');
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    res.status(200).json(channel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching channel', error });
  }
};

exports.updateChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    if (channel.owner.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    Object.assign(channel, req.body);
    await channel.save();
    res.status(200).json({ message: 'Channel updated successfully', channel });
  } catch (error) {
    res.status(500).json({ message: 'Error updating channel', error });
  }
};

exports.deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ message: 'Channel not found' });
    if (channel.owner.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    await channel.remove();
    res.status(200).json({ message: 'Channel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting channel', error });
  }
};
