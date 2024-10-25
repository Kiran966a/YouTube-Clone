// src/components/VideoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './VideoCard.css'; // Ensure you have a CSS file for styling

const VideoCard = ({ videoId, title, channelName }) => {
  return (
    <div className="video-card">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
        className="video-iframe"
      ></iframe>
      <Link to={`/video/${videoId}`} className="video-title">
        {title}
      </Link>
      <div className="channel-name">{channelName}</div>
    </div>
  );
};

export default VideoCard;
