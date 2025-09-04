import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Profile from '../../pages/Profile';

const Navbar = ({setShowLogin}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="nav-top">
        <div className="nav-top-left">
            <p>Government of India</p>
            <p>Ministry of Information Technology</p>
            <img src="src/assets/india-digi.svg" alt="india" />
        </div>

        <div className="nav-top-right">
          <button className='login-btn' onClick={()=>setShowLogin(true)}>
            <span>LOGIN</span>
            <svg xmlns="http://www.w3.org/2000/svg"  height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
              <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
            </svg>
          </button>
          <div className="user-icon">
            <Link to={"/profile"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
            </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-container">
          {/* <div className="logo">
            <span>Digital India</span>
          </div> */}
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-links">
              <Link to='/' className="nav-link">Home</Link>
              <a href="#" className="nav-link">About Us</a>
              <a href="#" className="nav-link">Feedback</a>
              <a href="#contact-container" className="nav-link">Contact Us</a>
            </div>
          </div>
          
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar