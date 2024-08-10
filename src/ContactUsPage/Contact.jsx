import React from 'react'
import './Contact.css';
const contactDetails = [
    {
      title: 'Address',
      content: '123 Government St, City, Country',
      icon: '📍',
    },
    {
      title: 'Phone',
      content: '+123 456 7890',
      icon: '📞',
    },
    {
      title: 'Email',
      content: 'info@government.org',
      icon: '📧',
    },
    {
      title: 'Office Hours',
      content: 'Mon-Fri: 9:00 AM - 5:00 PM',
      icon: '🕒',
    },
  ];
  

const  Contact = () => {
  return (
    <div className="grid-container">
      {contactDetails.map((detail, index) => (
        <div className="card" key={index}>
          <div className="card-icon">{detail.icon}</div>
          <div className="card-content">
            <h3 className="card-title">{detail.title}</h3>
            <p className="card-description">{detail.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default  Contact
