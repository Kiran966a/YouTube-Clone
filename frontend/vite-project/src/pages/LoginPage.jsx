import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const { login, logout, user, successMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  useEffect(() => {
    if (user) {
      
      setEmail('');
      setPassword('');
    }
  }, [user]);

  return (
    <div className="login-container">
      {user ? (
        <div>
          <h2>Welcome, {user.username.charAt(0)}</h2>
          {successMessage && <p className="success">{successMessage}</p>}
          <button onClick={handleLogout}>Logout</button>
        
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
      <p>
        Don't have an account?{' '}
        <button type="button" onClick={() => navigate('/register')}>
          Register here
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
