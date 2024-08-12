
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ViewTasks.css'; // Import the CSS file for styling
import Navbar from '../NavbarFolder/Navbar';

const ViewTasks = () => {
  const { subject, section } = useParams(); 
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        console.log(`Fetching tasks for subject: ${subject}, section: ${section}`);
        const response = await axios.get(`http://localhost:9001/tasks/subject/${subject}/section/${section}`);
        console.log('Tasks fetched:', response.data);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [subject, section]);

  return (
    <div>
      <Navbar/>
    <div className="view-tasks-container">
      <h1 className="view-tasks-title">Tasks for {subject} - {section}</h1>
      <div className="tasks-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
            </div>
          ))
        ) : (
          <p className="no-tasks-message">No tasks found for this subject and section.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ViewTasks;
