import React, { useState } from 'react';
import './CreateChannel.css'; // Optional: add your styles here

const CreateChannel = () => {
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isChannelCreated, setIsChannelCreated] = useState(false);

  // Sample YouTube videos
  const sampleVideos = [
      { title: 'JavaScript Fundamentals', url: 'https://www.youtube.com/embed/CBPUpprXrIA' },
    { title: 'CSS Flexbox Guide', url: 'https://www.youtube.com/embed/K74l26pE4YA' },
  ];

  const handleChannelSubmit = (e) => {
    e.preventDefault();
    // Logic to handle channel creation (e.g., API call)
    setMessage(`Channel "${channelName}" created successfully!`);
    setIsChannelCreated(true); // Switch to channel view
  };

  return (
    <div className="create-channel">
      {isChannelCreated ? (
        <div>
          <h2>{channelName}</h2>
          <p>{channelDescription}</p>
          <h3>Sample Videos</h3>
          <div className="video-list">
            {sampleVideos.map((video, index) => (
              <div key={index} className="video-item">
                <h4>{video.title}</h4>
                <iframe
                  width="250"
                  height="150"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
          <button onClick={() => setIsChannelCreated(false)}>Create Another Channel</button>
        </div>
      ) : (
        <form onSubmit={handleChannelSubmit}>
          <h2>Create Your Channel</h2>
          <div className="form-group">
            <label htmlFor="channelName">Channel Name</label>
            <input
              type="text"
              id="channelName"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="channelDescription">Channel Description</label>
            <textarea
              id="channelDescription"
              value={channelDescription}
              onChange={(e) => setChannelDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Channel</button>
          {message && <p className="success-message">{message}</p>}
        </form>
      )}
    </div>
  );
};

export default CreateChannel;
