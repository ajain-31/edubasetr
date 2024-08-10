import React from 'react';
import { useParams } from 'react-router-dom';
import './TeacherPortfolio.css';
import Navbarad from '../NavBarAdmin/Navbarad';

const data = [
  {
    id: '1',
    name: 'John Doe',
    position: 'Math Teacher',
    subject: 'Mathematics',
    experience: '10 years',
    education: 'M.Sc in Mathematics',
    achievements: [
      'Published research on advanced teaching methods',
      'Awarded Teacher of the Year in 2021',
      'Developed a new curriculum for Mathematics',
    ],
    contact: {
      email: 'johndoe@example.com',
      phone: '+1234567890',
    },
    profilePicture: 'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg',// Add path to profile picture
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
    resume: 'john_doe_resume.pdf', // Add path to resume
    skills: [
      { skill: 'Algebra', level: 'Expert' },
      { skill: 'Geometry', level: 'Intermediate' },
    ],
    introductionVideo: 'john_doe_intro.mp4', // Add path to introduction video
  },
  // Add more staff members as needed
];

const TeacherPortfolio = () => {
  const { id } = useParams();
  const staff = data.find((item) => item.id === id);

  if (!staff) {
    return <div>Staff member not found</div>;
  }

  return (
    <div>
      <Navbarad />
      <div className="staff-portfolio-container">
        <header className="staff-header">
          <img src= "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg" alt={staff.name} className="profile-picture" />
          <h1 style={{color:"white"}}>{staff.name}</h1>
          <p style={{fontSize:"18px",fontFamily:"Lora"}}>{staff.position}</p>
          <p style={{fontSize:"18px",}}>Subject: {staff.subject}</p>
        </header>
        <div className="staff-portfolio-content">
          <section className="staff-introduction">
            <h2>Introduction</h2>
            {staff.introductionVideo && (
              <video controls className="intro-video">
                <source src={`path/to/videos/${staff.introductionVideo}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </section>
          <section className="staff-details">
            <h2>Education</h2>
            <p style={{fontSize:"20px"}}>{staff.education}</p>
            <h2 style={{marginTop:"30px"}}>Skills</h2>
            <ul style={{fontSize:"20px"}}>
              {staff.skills.map((skill, index) => (
                <li key={index}>
                  {skill.skill} - <strong>{skill.level}</strong>
                </li>
              ))}
            </ul>
              <h2 style={{marginTop:"50px"}}>Experience</h2>
              <p style={{fontSize:"20px"}}>{staff.experience}</p>
          </section>
          <section className="staff-achievements">
            <h2>Achievements</h2>
            <ul>
              {staff.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
          <section className="staff-contact">
            <h2>Contact</h2>
            <p>Email: <a href={`mailto:${staff.contact.email}`}>{staff.contact.email}</a></p>
            <p>Phone: <a href={`tel:${staff.contact.phone}`}>{staff.contact.phone}</a></p>
            <p>
              LinkedIn: <a href={staff.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">{staff.socialLinks.linkedin}</a>
            </p>
            <p>
              Twitter: <a href={staff.socialLinks.twitter} target="_blank" rel="noopener noreferrer">{staff.socialLinks.twitter}</a>
            </p>
            <a href={`path/to/resumes/${staff.resume}`} download className="resume-button" style={{color:"white"}}>Download Resume</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortfolio;

