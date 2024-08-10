import React from 'react';
import './EventsPage.css';
import Navbar from '../NavbarFolder/Navbar';
const events = [
  {
    id: 1,
    schoolName: 'Green Valley High',
    eventName: 'Science Fair',
    date: '2024-08-20',
    description: 'A fair showcasing student science projects.',
    location: 'Main Hall',
  },
  {
    id: 2,
    schoolName: 'Riverdale Academy',
    eventName: 'Art Exhibition',
    date: '2024-09-05',
    description: 'An exhibition displaying student artworks.',
    location: 'Art Gallery',
  },
  {
    id: 3,
    schoolName: 'Sunrise School',
    eventName: 'Sports Day',
    date: '2024-08-30',
    description: 'Annual sports day with various competitions.',
    location: 'Sports Ground',
  },
  {
    id: 4,
    schoolName: 'Lakeside Institute',
    eventName: 'Music Concert',
    date: '2024-09-15',
    description: 'A concert featuring student bands and solo performers.',
    location: 'Auditorium',
  },
];

function EventsPage() {
  return (
    <div>
      <Navbar/>
    <div className="upcoming-events">
      <h2 style={{color:"blue"}}>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.eventName}</h3>
            <p><strong>School:</strong> {event.schoolName}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default EventsPage;
