import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Language.css';
import Navbar from '../NavbarFolder/Navbar';
import Footer from '../FooterPage/Footer';

const languages = [
  { name: 'English',image: 'https://i.pinimg.com/564x/d7/d2/f2/d7d2f2f41775d5978beb0d07bc68a125.jpg' },
  { name: 'Hindi',image: 'https://i.pinimg.com/564x/af/91/40/af9140e680f1e9df7c0643d25b664e78.jpg' },
  { name: 'German',image: 'https://i.pinimg.com/564x/ce/7f/6e/ce7f6e0b033964b81041db039f3b803d.jpg' },
 
];

const Language = () => {
  const navigate = useNavigate();

  const handleLanguageClick = (language) => {
    navigate(`/chat/${language}`);
  };

  return (
    <div>
      <Navbar/>
      <div className="language-selection-container">
        <h1  style={{marginBottom:"40px",fontFamily:"Georgia"}}>Select Your Preferred Language to Learn</h1>
        <div className="languages-grid">
          {languages.map((language) => (
            <div
              key={language.name}
              className="language-card"
              onClick={() => handleLanguageClick(language.name)}
            >
              <h2 style={{color:"#FE2C54"}}>{language.name}</h2>
              <img src={language.image} alt={language.name} className="language-image" />
              <button className="learn-button">Happy Learning</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Language;