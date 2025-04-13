import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="logo">SPLITIFY</div>
      <p className="tagline">Split expenses with friends easily.</p>
      <div className="button-group">
        <button onClick={() => navigate('/signup')}>Sign Up</button>
        <button onClick={() => navigate('/login')}>Log In</button>
      </div>
    </div>
  );
};

export default HomePage;
