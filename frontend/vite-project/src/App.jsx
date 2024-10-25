import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VideoPage from './pages/VideoDetailPage'; 
import CreateChannel from './pages/CreateChannel'; 
import AuthProvider from './context/AuthProvider';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <SideBar />} 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/create-channel" element={<CreateChannel />} /> 
      </Routes>
    </>
  );
};

export default App;
