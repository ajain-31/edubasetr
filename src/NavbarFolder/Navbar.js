import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="landing-page" >
      <nav className="navbar" style={{backgroundColor:"#FE2C54"}}> 
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
            <Link to="/academics" onClick={toggleMenu}>Academics</Link>
            <Link to="/result" onClick={toggleMenu}>Result</Link>
            <Link to="/sports" onClick={toggleMenu}>Sports</Link>
            <Link to="/events" onClick={toggleMenu}>Events</Link>
            <Link to="/language" onClick={toggleMenu}>Language</Link>
          </div>
        </div>
        
        <div className="nav-buttons">
          <Link to="/"  style={{fontSize:'18px',fontFamily:'sans-serif',fontWeight:'bold',color:'white',textDecoration:"none",marginRight:"20px"}}>Home</Link>
          <Link to="/aboutus" style={{fontSize:'18px',fontFamily:'sans-serif',fontWeight:'bold',color:'white',textDecoration:"none",marginRight:"20px"}}>About Us</Link>
          <Link to="/login" style={{fontSize:'18px',fontFamily:'sans-serif',fontWeight:'bold',color:'white',textDecoration:"none",marginRight:"20px"}} >Login</Link>
          

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
