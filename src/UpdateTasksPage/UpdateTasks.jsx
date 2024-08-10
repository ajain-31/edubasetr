
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateTasks.css'; // Import your CSS file if needed
import NavStaff from '../NavStaffFolder/NavStaff';

const UpdateTasks = () => {
  const { className, sectionName } = useParams();
  const [task, setTask] = useState({ title: '', description: '' });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle task submission, e.g., send the task to a server
    alert('Tasks Submitted Successfully');
  };

  return (
    <div>
      <NavStaff />
      <div className="update-tasks-container">
        <h1 className="title">Update Tasks for {className} - {sectionName}</h1>
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Task Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Task Description:</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit Task</button>
        </form>
        {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      </div>
    </div>
  );
};

export default UpdateTasks;
