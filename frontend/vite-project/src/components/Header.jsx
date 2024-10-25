import React, { useContext } from 'react';
import './Header.css';
import { FaUser } from 'react-icons/fa'; 
import { AuthContext } from '../context/AuthProvider'; 

const Header = ({ onSearch }) => {
  const { user, logout } = useContext(AuthContext); 

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  const handleSignIn = () => {
    window.location.href = '/login';
  };

  const handleLogout = () => {
    logout(); 
    window.location.href = '/login'; 
  };

  return (
    <div className="header">
      <h1 className="header-title">YouTube</h1>
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
          onChange={handleInputChange} 
          onKeyPress={handleKeyPress} 
        />
      </div>
      {user ? (
        <div className="user-info">
          <span className="user-initial">{user.username.charAt(0)}</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="sign-in-button" onClick={handleSignIn}>
          <FaUser style={{ marginRight: '5px' }} />
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;
