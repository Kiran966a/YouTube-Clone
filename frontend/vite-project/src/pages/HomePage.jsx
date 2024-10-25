import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import VideoCard from '../components/VideoCard'; 
import Header from '../components/Header'; 
import './HomePage.css';

const HomePage = () => {
  const videos = [
    { id: 'xvm3X1oyTL8', title: 'Learn React in 30 Minutes', channelName: 'React Channel', category: 'React' },
    { id: 'CBPUpprXrIA', title: 'JavaScript Fundamentals', channelName: 'JS Tutorials', category: 'JavaScript' },
  
  ];

  const categories = [...new Set(videos.map(video => video.category))];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory ? video.category === selectedCategory : true;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <Sidebar />
      <div className="category-buttons">
        <button 
          onClick={() => setSelectedCategory('')} 
          className={selectedCategory === '' ? 'active' : ''}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)} 
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="video-grid"> 
        {filteredVideos.map(video => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} channelName={video.channelName} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
