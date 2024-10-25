// src/components/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = ({ videoId, title, channelName }) => {
  return (
    <div className="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <div className="video-title">{title}</div>
      <div className="channel-name">{channelName}</div>
    </div>
  );
};

export default VideoPlayer;
