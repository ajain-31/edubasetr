import React from 'react';
import './AboutUs.css';
import Footer from '../FooterPage/Footer';
import Navbar from '../NavbarFolder/Navbar';

const teamMembers = [
  {
    name: 'Afrah Sulthana H',
    position: 'Software Developer',
    image: 'https://via.placeholder.com/150',
    description: 'John has been leading our school for the past 10 years with a focus on academic excellence and holistic development.'
  },
  {
    name: 'Ahamed Saliha M',
    position: 'Full Stack developer',
    image: 'https://via.placeholder.com/150',
    description: 'Jane has a passion for teaching and administration, ensuring that both staff and students have the resources they need to succeed.'
  },
  {
    name: 'Ajain S',
    position: 'Editor',
    image: 'https://via.placeholder.com/150',
    description: 'Mark brings a wealth of experience in scientific research and education, inspiring students to explore the wonders of science.'
  },
  {
    name: 'Akash R',
    position: 'Team Lead',
    image: 'https://via.placeholder.com/150',
    description: 'Emma fosters creativity and artistic expression in our students, helping them to develop their talents and pursue their passions.'
  }
];

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <div className="about-us-container">
        <div className="hero-section">
          <h1>Designers, thinkers & collaborators</h1>
        </div>
        <div className="intro-section">
          <p>Led by Afrah Sulthana H and Ahamed Saliha M, we are a dedicated team of educators and professionals committed to academic excellence and holistic development.</p>
          <p>We pride ourselves on our process, our craft, and our attention to detail. We also put a lot of time into nurturing our relations with our students and staff. We believe in charm, good manners, and punctuality. And a healthy dose of humor – we take pride in our work, but don't take ourselves too seriously.</p>
          <p>We’re agile, flexible, nimble, responsive, and adaptive. There’s no hierarchy to trip over, no juniors making decisions about your learning on your time – just a dedicated group of people who are all across, and focused on, your educational journey.</p>
        </div>
        <h2 style={{paddingTop:"40px",marginBottom:"40px"}}>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
            
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
