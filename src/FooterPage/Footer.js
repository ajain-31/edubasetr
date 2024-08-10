import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor:"#FE2C54"}}>
      <div className="footer-content">
        <div className="footer-section about">
          <h3 style={{color:"yellow"}}>About Us</h3>
          <p>EduBasedTN is dedicated to providing quality education and fostering the growth of students in all aspects of life.</p>
          <div className="contact">
            <i className="fas fa-phone"></i> +1 555 123 456
            <i className="fas fa-envelope"></i> info@edubasedtn.com
          </div>
        </div>
        <div className="footer-section links">
          <h3 style={{color:"yellow"}}>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
        <h3 style={{color:"yellow"}}>Follow US</h3>
         <p>Help</p>
         <p>Link to us</p>
        <p>FAQ</p>
     <p>Terms & Conditions</p>
<p>Feedback</p>


        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 EduBasedTN | Designed by EduBasedTN
      </div>
    </footer>
  );
};

export default Footer;
