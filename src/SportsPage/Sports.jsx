import React, { useState } from 'react';
import Navbar from '../NavbarFolder/Navbar'; 

import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Sports.css';
import Footer from '../FooterPage/Footer';
import Carousel from '../Carousel';
const Sports = () => {
  

  const cardsData = [
    {
      title: 'CHESS COMPETITION INDISTRICT LEVEL',
      description: 'Our students have participated in an chess competition in district level and won the second price',
      image: 'https://www.theyenepoyaschool.com/storage/files/achievements%20yene/20180711_090232%20(1)-min.jpg',
    },
    {
      title: 'YOGA COMPETITION',
      description: 'Our ambitious students have participated in an yoga competition in district level and won the third price',
      image: 'https://i.ytimg.com/vi/w3Woz08DjF8/sddefault.jpg',
    },
    {
      title: 'CARROM BOARD COMPETITION',
      description: 'Our excellent students have participates in an carrom board competition in district level and won the prizes ',
      image: 'https://carromshub.com/wp-content/uploads/2021/08/top-carrom-board-players.jpg',
    },
    {
      title: 'FOOT BALL COMPETITION',
      description: 'Our innovative have participated in an foot ball competition in district level and won the  prizes and medals and some participation certificates',
      image: 'https://www.startcutaction.in/wp-content/uploads/2024/03/GREAT-GOALS-EMPOWERING-GOVERNMENT-SCHOOL-GIRLS-THROUGH-JUST-FOR-GIRLS-FOOTBALL-PROGRAM-4.jpg',
    },
    {
      title: 'BHARATANATYAM COMPETITION',
      description: 'Our fabulous students have participated in an bharatanatyam competition in district level and won the  prizes and medals and some participation certificates',
      image: 'https://dpsindore.org/wp-content/uploads/2024/06/Akhil-Natarajam-Intercultural-Association-01.webp',
    },
  ];
 

  const eventDetails = [
    {
      title: 'School Annual Day Celebration',
      date: 'August 15, 2024',
      venue: 'School Auditorium',
      incharge: 'Mr. Arun kumar',
      contact: '+91 93847 708',
    },
    {
      title: 'Science Exhibition',
      date: 'September 10, 2024',
      venue: 'School Science Lab',
      incharge: 'Ms. Jane Smith',
      contact: '+91 98940 542',
    },
    {
      title: 'Sports Day',
      date: 'October 5, 2024',
      venue: 'School Playground',
      incharge: 'Mr. Richard Roe',
      contact: '+123 456 78',
    },
  ];
  
  
  
  
  return (
    <div>
       <Navbar />
      <div>
         <h1 style={{textAlign:"center",fontFamily:'roboto',color:'#FF007F'}}>OUR SCHOOL EVENTS</h1>
         
           <Carousel/>
       
      
      
           
      <h1 style={{ textAlign: "center", fontFamily: 'Roboto', color: '#FF007F' }}>OUR ACHIEVEMENTS</h1>
      <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div>





     
         <h1 style={{textAlign:"center",fontFamily:'roboto',color:'#FF007F'}}>UPCOMING EVENST IN OUR SCHOOL</h1>
      
         <div className="posters-container">
        {eventDetails.map((event, index) => (
        <div className="poster" key={index}>
          <div className="poster-content">
            <h1 className="poster-title">{event.title}</h1>
            <p className="poster-date">Date: {event.date}</p>
            <p className="poster-venue">Venue: {event.venue}</p>
            <p className="poster-incharge">In-charge: {event.incharge}</p>
            <p className="poster-contact">Contact Us: {event.contact}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

    
     <Footer/>
    </div>
    </div>
  )
}

export default Sports;



