import React, { useState } from 'react';
import './PortfolioStaffSearch.css';
import Navbarad from '../NavBarAdmin/Navbarad';
import { Link } from 'react-router-dom';

const PortfolioStaffSearch = () => {
  const [searchValues, setSearchValues] = useState({
    name: '',
    position: '',
    subject: '',
  });

  const [activeCard, setActiveCard] = useState(null);

  const data = [
    { id: '1', name: 'Lakshmi', position: 'Math Teacher', subject: 'Mathematics' },
    { id: '2', name: 'Hema', position: 'Science Teacher', subject: 'Physics' },
    { id: '3', name: 'Avinash', position: 'History Teacher', subject: 'History' },
    { id: '4', name: 'Deepak', position: 'English Teacher', subject: 'English' },
    { id: '5', name: 'Sachin', position: 'PE Teacher', subject: 'Physical Education' },
    { id: '6', name: 'Kishore', position: 'Music Teacher', subject: 'Physical Education' },
    { id: '7', name: 'Leelavathy', position: 'Physics Teacher', subject: 'Physical Education' },
    { id: '8', name: 'Peter', position: 'Chemistry Teacher', subject: 'Physical Education' },
    { id: '9', name: 'Roshan', position: 'PE Teacher', subject: 'Physical Education' },
    { id: '10', name: 'Jasmine', position: 'PE Teacher', subject: 'Physical Education' },
    { id: '11', name: 'Arunthathi', position: 'PE Teacher', subject: 'Physical Education' },
    { id: '12', name: 'Ziya', position: 'PE Teacher', subject: 'Physical Education' },
       

  ];

  const handleSearchChange = (e) => {
    const { id, value } = e.target;
    setSearchValues({ ...searchValues, [id]: value });
  };

  const filterData = () => {
    return data.filter(item =>
        
      (searchValues.name === '' || item.name.toLowerCase().includes(searchValues.name.toLowerCase())) &&
      (searchValues.position === '' || item.position.toLowerCase().includes(searchValues.position.toLowerCase())) &&
      (searchValues.subject === '' || item.subject.toLowerCase().includes(searchValues.subject.toLowerCase()))
    );
  };

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div>
      <Navbarad/>
      <div style={{marginTop:"100px", marginLeft:"300px"}}>
        <div className="search-container">
          <span style={{paddingLeft:'30px'}}>NAME</span>
          <span style={{paddingLeft:'170px'}}>POSITION</span>
          <span style={{paddingLeft:'170px'}}>SUBJECT</span>
          <br/>
          <input
            type="text"
            id="name"
            placeholder="Search by Name"
            value={searchValues.name}
            onChange={handleSearchChange}
            style={{marginRight:"30px"}}
          />
          <input
            type="text"
            id="position"
            placeholder="Search by Position"
            value={searchValues.position}
            onChange={handleSearchChange}
            style={{marginRight:"30px"}}
          />
          <input
            type="text"
            id="subject"
            placeholder="Search by Subject"
            value={searchValues.subject}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="container">
        <div className="results">
          {filterData().map((item) => (
            <div 
              key={item.id} 
              className={`result-item ${activeCard === item.id ? 'active' : ''}`} 
              onClick={() => handleCardClick(item.id)}
            >
              <span style={{paddingRight:"30px",paddingLeft:'180px'}}>Name: {item.name}</span>
              <span style={{paddingRight:"30px"}}>Position: {item.position}</span>
              <span style={{paddingRight:"30px"}}>Subject: {item.subject}</span>
              <Link to={`/staffportfolio/${item.id}`} style={{color: "blue"}}>Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioStaffSearch;

