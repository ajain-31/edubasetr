
import React from 'react';
import { useParams } from 'react-router-dom';
import './StaffStudentPortfolio.css';

import NavStaff from '../NavStaffFolder/NavStaff';



const data = [
  { id: '1', name: 'Ahamed Saliha', class: '10', section: 'A' },
  { id: '2', name: 'Arun Kumar', class: '10', section: 'B' },
  { id: '3', name: 'Emily Johnson', class: '11', section: 'A' },
  { id: '4', name: 'Michael Brown', class: '11', section: 'B' },
  { id: '5', name: 'Linda Davis', class: '12', section: 'A' },
  { id: '6', name: 'James Wilson', class: '12', section: 'B' },
  { id: '7', name: 'Zulfia', class: '12', section: 'C' },
  { id: '9', name: 'Archana', class: '9', section: 'A' },
  { id: '10', name: 'Chenthamizh', class: '10', section: 'A' },
  { id: '11', name: 'Ezhil', class: '11', section: 'A' },
  { id: '12', name: 'Dharshini', class: '8', section: 'A' },
  { id: '13', name: 'Faizal', class: '7', section: 'A' },
  { id: '14', name: 'Tharun', class: '10', section: 'B' },
  { id: '15', name: 'Vignesh', class: '11', section: 'C' },
  { id: '16', name: 'Anu Sri', class: '1', section: 'A' },
  { id: '17', name: 'Sujitha Mary', class: '10', section: 'C' },
  { id: '18', name: 'Yazhini', class: '12', section: 'C' },
  { id: '19', name: 'Xander', class: '8', section: 'C' },
  { id: '20', name: 'Zubair', class: '12', section: 'C' },
  
];


const StaffStudentPortfolio = () => {
  const { id } = useParams();
  const student = data.find((item) => item.id === id);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
       <NavStaff/>
      <div className="portfolio-container">
        <header className="header">
          <h1 style={{ color: "white",fontFamily:"Lora"}}>{student.name}</h1>
          <p>Student at Government higher secondary school</p>
          <p>Class: {student.class}</p>
          <p>Section: {student.section}</p>
        </header>
        <div className="portfolio-content">
          <section className="about">
            <h2 style={{fontFamily:"Georgia",fontSize:"35px"}}>About Me</h2>
            <p style={{wordSpacing:"18px",fontSize:"18px",fontFamily:"Tahoma (sans-serif)"}}>Hello! I'm {student.name}, a student at Government higher secondary School. I'm passionate about learning new things and participating in various extracurricular activities. I enjoy working on projects that challenge my skills and allow me to grow.</p>
          </section>
          <section className="projects">
            <h2 style={{fontFamily:"Georgia",fontSize:"35px"}}>Projects</h2>
            <div className="project">
              <h3 style={{color:"blue"}}>Science Fair Project</h3>
              <p style={{wordSpacing:"14px",fontSize:"16px",padding:"3px",fontFamily:"Tahoma (sans-serif)"}}>A project on renewable energy sources, demonstrating the benefits of solar and wind power.</p>
            </div>
            <div className="project">
              <h3 style={{color:"blue"}}>Art Exhibition</h3>
              <p style={{wordSpacing:"14px",fontSize:"16px",padding:"3px",fontFamily:"Tahoma (sans-serif)"}}>Displayed several pieces of artwork at the school art exhibition, showcasing various techniques and styles.</p>
            </div>
          </section>
          <section className="skills">
            <h2 style={{fontFamily:"Georgia",fontSize:"35px"}}>Skills</h2>
            <ul>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Art</li>
              <li>Sports</li>
            </ul>
          </section>
          <section className="contact">
            <h2>Contact</h2>
            <p style={{fontSize:"18px",fontWeight:"bold"}}>Email : <a href="mailto:ahamed.saliha@example.com">studentname@gmail.com</a></p>
            <p style={{fontSize:"18px" ,fontWeight:"bold"}}>Phone : <a href="tel:+9384770863">9384770863</a></p>
          </section>
        </div>
      </div>
    </div>
    
  );
};
export default StaffStudentPortfolio;
