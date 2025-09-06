import React, { useState, useEffect } from 'react';
import './Logo_Info.css';

const Logo_Info = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    setIsVisible(true);
  }, []);

  return (
    <div className="logo-info-container">
      <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}>
        <div className="logo-section">
          <div className="logo-wrapper">
            <svg className="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4A90E2" />
                  <stop offset="100%" stopColor="#6A5ACD" />
                </linearGradient>
              </defs>
              <path fill="url(#gradient)" d="M100,20 a80,80 0 1,0 0,160 a80,80 0 1,0 0,-160" />
              <text x="100" y="90" textAnchor="middle" fontSize="24" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">IS</text>
              <text x="100" y="125" textAnchor="middle" fontSize="14" fill="white" fontFamily="Arial, sans-serif">InternSeva</text>
            </svg>
          </div>
        </div>

        <div className="info-section">
          <div className="greeting">
            <h1 className="greeting-text">
              Hi {user ? user.username : 'Guest'},
              <span className="waving-hand">👋</span>
            </h1>
          </div>
          
          <div className="tagline">
            <h2 className="tagline-text">
              Your gateway to <span className="highlight">opportunities</span>, 
              <span className="highlight"> growth</span> and 
              <span className="highlight"> learning</span>
            </h2>
          </div>

          {!user && (
            <div className="guest-cta">
              <p>Join us today to unlock your potential!</p>
              <button className="cta-button">Get Started</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo_Info;