import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavStaff from '../NavStaffFolder/NavStaff';
import './UpdateTasks.css';

const UpdateTasks = () => {
  const { className, sectionName } = useParams();
  const [task, setTask] = useState({ title: '', description: '', subject: 'Tamil', section: sectionName });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/tasks/add', task);
      if (response.status === 200) {
        setSubmissionMessage('Task Submitted Successfully');
        setTask({ title: '', description: '', subject: task.subject, section: sectionName });
      } else {
        setSubmissionMessage('Failed to submit task');
      }
    } catch (error) {
      console.error('Error submitting task:', error);
      setSubmissionMessage('Failed to submit task');
    }
  };

  return (
    <div>
      <NavStaff />
      <div className="update-tasks-container">
        <h1 className="title">Update Tasks for {className} - {sectionName}</h1>
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={task.subject}
              onChange={handleInputChange}
              required
            >
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="Social Science">Social Science</option>
            </select>

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
