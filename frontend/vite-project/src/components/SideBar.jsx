import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeNavigation = () => {
    navigate('/'); // Navigate to home page
    setIsOpen(false); // Close sidebar after navigation
  };

  const handleCreateChannelNavigation = () => {
    navigate('/create-channel'); // Navigate to create channel page
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="hamburger">
        ☰
      </button>
      <div className="sidebar-content">
        <div className="sidebar-item" onClick={handleHomeNavigation}>
          <span className="icon">🏠</span>
          {isOpen && <span className="text">Home</span>}
        </div>
        <div className="sidebar-item">
          <span className="icon">📹</span>
          {isOpen && <span className="text">Shorts</span>}
        </div>
        <div className="sidebar-item">
          <span className="icon">🔔</span>
          {isOpen && <span className="text">Subscriptions</span>}
        </div>
        <div className="sidebar-item" onClick={handleCreateChannelNavigation}>
          <span className="icon">📺</span>
          {isOpen && <span className="text">Create Your Channel</span>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
