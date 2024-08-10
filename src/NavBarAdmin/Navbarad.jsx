
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbarad.css';

const Navbarad = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-left">
          <div className="hamburger-icon" onClick={toggleMenu}>&#9776;</div>
          <img src="./afrah (1).png" alt='logo'/>
        </div>

        <div className={`slider ${isMenuOpen ? 'open' : ''}`}>
          <div className="slider-header">
            <div className="slider-title">Content</div>
            <div className="close-icon" onClick={closeMenu}>&times;</div>
          </div>
         
          <div className="slider-content">
            <Link to="/portfoliosearching" onClick={toggleMenu}>View Student Portfolio</Link>
            <Link to="/portfolioStaffSearch" onClick={toggleMenu}>View Staff Portfolio</Link>
            <Link to="/updateevents" onClick={toggleMenu}>Update Events</Link>
          
          </div>
        </div>
        <Link to="/" className="navbar-logo">
        
          
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/AdminLandingPage" className="navbar-link" style={{fontSize:'20px',fontWeight:"bold"}}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/AboutUs" className="navbar-link" style={{fontSize:'20px',fontWeight:"bold"}}>About Us</Link>
          </li>
          
          
          <li className="navbar-item">
            <Link to="/Login" className="navbar-link" style={{fontSize:'20px',fontWeight:"bold",marginRight:"15px"}}>Login</Link>
            <Link to="/signup" style={{fontSize:'18px',fontFamily:'sans-serif',fontWeight:'bold',color:'white',textDecoration:"none",marginRight:"50px",paddingRight:"30px"}}>Sign up</Link>
          </li>
        </ul>
        
      </div>
      
    </nav>
  );
}

export default Navbarad;
