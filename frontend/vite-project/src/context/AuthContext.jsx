import React, { createContext, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const register = async (username, email, password) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      setSuccessMessage('Registration successful!');
    } catch (error) {
      throw new Error(error.response?.data.error || 'Registration failed');
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setUser(data.user);
      localStorage.setItem('token', data.token);
      setSuccessMessage('Login successful!');
    } catch (error) {
      throw new Error(error.response?.data.error || 'Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    setSuccessMessage('Logged out successfully!');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, successMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
