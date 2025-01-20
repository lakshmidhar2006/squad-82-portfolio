import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobile, setMobile] = useState(false); 

  const toggleMenu = () => {
    setMobile(!isMobile);
  };

  return (
    <nav className="navbar-container">

      <div className="logo">
        <img className="logo-img" src="/src/assets/Logo.png" alt="Logo" />
        <span className="logo-text">82</span>
      </div>

     
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

     
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/projects")}>Projects</button>
        <button onClick={() => navigate("/activities")}>Activities</button>
        <button onClick={() => navigate("/about")}>About Us</button>
        <button onClick={() => navigate("/squad")}>Squad</button>
      </div>
    </nav>
  );
};

export default Navbar;
