
import React, { useState, useEffect } from 'react';
import './UpdateEvents.css';
import Navbarad from '../NavBarAdmin/Navbarad';
import Footer from '../FooterPage/Footer';

const UpdateEvents = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    venue:'',
    description: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewEvent({ ...newEvent, [id]: value });
  };

  const handleAddEvent = () => {
    if (isEditing) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = newEvent;
      setEvents(updatedEvents);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setEvents([...events, newEvent]);
    }
    setNewEvent({ title: '', date: '', description: '' });
  };

  const handleEditEvent = (index) => {
    setNewEvent(events[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
    if (isEditing && editIndex === index) {
      setIsEditing(false);
      setEditIndex(null);
      setNewEvent({ title: '', date: '', description: '' });
    }
  };

  return (
    <div>
      <Navbarad/>
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
          <button onClick={handleAddEvent}>{isEditing ? 'Update Event' : 'Add Event'}</button>
        </div>
      </div>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.title}</h3>
            <p ><span style={{color:"blue"}}>Date: </span>{event.date}</p>
            <p ><span style={{color:"blue"}}>Venue: </span>{event.venue}</p>
            <p>{event.description}</p>
            <div className="event-actions">
              <button onClick={() => handleEditEvent(index)}>Edit</button>
              <button onClick={() => handleDeleteEvent(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UpdateEvents;

