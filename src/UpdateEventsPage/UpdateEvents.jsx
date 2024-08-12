
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateEvents.css';
import Navbarad from '../NavBarAdmin/Navbarad';
import Footer from '../FooterPage/Footer';

const UpdateEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    venue: '',
    description: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:9001/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewEvent({ ...newEvent, [id]: value });
  };

  const handleAddEvent = async () => {
    if (isEditing) {
      await axios.put(`http://localhost:9001/events/${editId}`, newEvent);
      setIsEditing(false);
      setEditId(null);
    } else {
      await axios.post('http://localhost:9001/events', newEvent);
    }
    setNewEvent({ title: '', date: '', venue: '', description: '' });
    fetchEvents();
  };

  const handleEditEvent = (event) => {
    setNewEvent(event);
    setIsEditing(true);
    setEditId(event.id);
  };

  const handleDeleteEvent = async (id) => {
    await axios.delete(`http://localhost:9001/events/${id}`);
    fetchEvents();
  };

  return (
    <div>
      <Navbarad />
      <div className="update-events-page">
        <div className="update-events-container">
          <header className="header">
            <h1 style={{color:'white'}}>Update School Events</h1>
          </header>
          <div className="event-form">
            <input
              type="text"
              id="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleChange}
            />
            <input
              type="date"
              id="date"
              placeholder="Event Date"
              value={newEvent.date}
              onChange={handleChange}
            />
            <input
              type="text"
              id="venue"
              placeholder="Event Venue"
              value={newEvent.venue}
              onChange={handleChange}
            />
            <textarea
              id="description"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={handleChange}
            />
            <button onClick={handleAddEvent}>
              {isEditing ? 'Update Event' : 'Add Event'}
            </button>
          </div>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p><span style={{color:"blue"}}>Date: </span>{event.date}</p>
              <p><span style={{color:"blue"}}>Venue: </span>{event.venue}</p>
              <p>{event.description}</p>
              <div className="event-actions">
                <button onClick={() => handleEditEvent(event)}>Edit</button>
                <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateEvents;
