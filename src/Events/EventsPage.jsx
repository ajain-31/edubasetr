
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventsPage.css';
import Navbar from '../NavbarFolder/Navbar';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:9001/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="upcoming-events">
        <h2 style={{color:"blue"}}>Upcoming Events</h2>
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
