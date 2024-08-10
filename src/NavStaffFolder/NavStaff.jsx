
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './NavStaff.css';

const NavStaff = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container" style={{backgroundColor:"#FE2C54"}}>
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
            <Link to="/attendance" onClick={toggleMenu}>Attendance</Link>
            <Link to="/updatetasks" onClick={toggleMenu}>Update Tasks</Link>
            <Link to="/staffsearchingstudent" onClick={toggleMenu}>View Student Portfolio</Link>
          
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
            <Link to="/Login" className="navbar-link" style={{fontSize:'20px',fontWeight:"bold"}}>Login</Link>
          </li>
        </ul>
        
      </div>
      
    </nav>
  );
}

export default NavStaff;
