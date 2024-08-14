
import React, { useState, useEffect } from 'react';
import NavStaff from '../NavStaffFolder/NavStaff';
import { useNavigate } from 'react-router-dom';
import './UpdateUi.css';

const Card = ({ title, description, tasks, onButtonClick }) => (
  <div className="card">
    <h3>{title}</h3>
    <p className="section-description">{description}</p>
    <div className="tasks-container">
    {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <p className="task-title">{task.title}</p>
            <p className="task-desc">{task.description}</p>
          </div>
        ))
    ):(
      <p></p>
    ) 
      }
       
      
    </div>
    <button onClick={onButtonClick} className="update-button">{`Update Tasks`}</button>
  </div>
);

const UpdateUi = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    'CLASS 10-SECTION A': [],
    'CLASS 8-SECTION B': [],
    'CLASS 8-SECTION C': []
  });

  useEffect(() => {
    // Replace with your logic to fetch tasks from the server and update the state
    // Example: fetchTasksForClassAndSection('CLASS 10', 'SECTION A');
  }, []);

  const handleButtonClick = (className, sectionName) => {
    navigate(`/UpdateTasks/${className}/${sectionName}`);
  };

  return (
    <div>
      <NavStaff />
      <h1 className="header" style={{color:"white"}}>Update Tasks</h1>
      <div className="card-container">
        <Card
          title="CLASS 10"
          description="SECTION A"
          tasks={tasks['CLASS 10-SECTION A']}
          onButtonClick={() => handleButtonClick('CLASS 10', 'SECTION A')}
        />
        <Card
          title="CLASS 8"
          description="SECTION B"
          tasks={tasks['CLASS 8-SECTION B']}
          onButtonClick={() => handleButtonClick('CLASS 8', 'SECTION B')}
        />
        <Card
          title="CLASS 8"
          description="SECTION C"
          tasks={tasks['CLASS 8-SECTION C']}
          onButtonClick={() => handleButtonClick('CLASS 8', 'SECTION C')}
        />
      </div>
    </div>
  );
};

export default UpdateUi;
