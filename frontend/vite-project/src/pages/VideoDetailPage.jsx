import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard'; 
import Header from '../components/Header'; 
import SideBar from '../components/SideBar'; 
import './VideoDetailPage.css'; 

const VideoDetailPage = () => {
  const { videoId } = useParams();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editComment, setEditComment] = useState('');

  const recommendedVideos = [
    { id: 'xvm3X1oyTL8', title: 'Learn React in 30 Minutes', channelName: 'React Channel' },
    { id: 'gY5sGvq-8h8', title: 'React Js Tutorial', channelName: 'Apna College' },
    { id: 'CBPUpprXrIA', title: 'JavaScript Fundamentals', channelName: 'JS Tutorials' },
    { id: 'K74l26pE4YA', title: 'CSS Flexbox Guide', channelName: 'CSS Master' },
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleCommentDelete = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleCommentEdit = (index) => {
    setEditIndex(index);
    setEditComment(comments[index]);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedComments = [...comments];
    updatedComments[editIndex] = editComment;
    setComments(updatedComments);
    setEditIndex(null);
    setEditComment('');
  };

  return (
    <div className="video-detail-page">
      <SideBar /> 
      <div className="main-content"> 
        <Header /> 
        <div className="video-player">
          <h2>Video ID: {videoId}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3>Channel Name</h3>
          <p>Description of the video...</p>
          <div className="reaction-buttons">
            <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
            <button onClick={() => setDislikes(dislikes + 1)}>Dislike {dislikes}</button>
          </div>
        </div>

        <div className="comments-section">
          <h4>Comments</h4>
          <form onSubmit={handleCommentSubmit} aria-label="Add a comment">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
              required
              aria-label="Comment input"
            />
            <button type="submit" aria-label="Submit comment">Submit</button>
          </form>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <form onSubmit={handleEditSubmit}>
                    <input
                      type="text"
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      required
                      aria-label="Edit comment input"
                    />
                    <button type="submit" aria-label="Save edited comment">Save</button>
                    <button type="button" onClick={() => setEditIndex(null)} aria-label="Cancel edit">Cancel</button>
                  </form>
                ) : (
                  <>
                    {comment}
                    <button onClick={() => handleCommentEdit(index)} aria-label="Edit comment">Edit</button>
                    <button onClick={() => handleCommentDelete(index)} aria-label="Delete comment">Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="recommended-videos">
          <h4>Recommended Videos</h4>
          <div className="video-grid">
            {recommendedVideos.map((video) => (
              <VideoCard key={video.id} videoId={video.id} title={video.title} channelName={video.channelName} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
