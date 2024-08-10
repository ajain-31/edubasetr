import React from 'react';
import NavStaff from '../NavStaffFolder/NavStaff';
import { useNavigate } from 'react-router-dom';
import './UpdateUi.css'; // Import your CSS file if needed

// Define the Card component
const Card = ({ title, description, buttonLabel, onButtonClick }) => (
  <div className="card">
    <h3 style={{marginTop:"20px"}}>{title}</h3>
    <p style={{marginTop:"20px",marginBottom:"20px",color:"coral",fontSize:"20px"}}>{description}</p>
    <button onClick={onButtonClick} style={{fontSize:"23px"}}>{buttonLabel}</button>
  </div>
);

// Main component
const UpdateUi = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Handle button clicks and navigate to /UpdateTasks with parameters
  const handleButtonClick = (className, sectionName) => {
    navigate(`/UpdateTasks/${className}/${sectionName}`); // Navigate to UpdateTasks page with parameters
  };

  return (
    <div>
      <NavStaff />
      <h1 style={{ textAlign: 'center' ,color:"blue"}}>Update Tasks</h1>
      <div className="card-container">
        <Card
          title="CLASS 10"
          description="SECTION A"
          buttonLabel="Update"
          onButtonClick={() => handleButtonClick('CLASS 10', 'SECTION A')} // Pass parameters
        />
        <Card
          title="CLASS 8"
          description="SECTION B"
          buttonLabel="Update"
          onButtonClick={() => handleButtonClick('CLASS 8', 'SECTION B')} // Pass parameters
        />
        <Card
          title="CLASS 8"
          description="SECTION C"
          buttonLabel="Update"
          onButtonClick={() => handleButtonClick('CLASS 8', 'SECTION C')} // Pass parameters
        />
      </div>
    </div>
  );
};

export default UpdateUi;

