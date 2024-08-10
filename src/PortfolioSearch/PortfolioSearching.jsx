
import React, { useState } from 'react';
import './PortfolioSearching.css';
import Navbarad from '../NavBarAdmin/Navbarad';
import { Link } from 'react-router-dom';

const PortfolioSearching = () => {
  const [searchValues, setSearchValues] = useState({
    id: '',
    name: '',
    class: '',
    section: '',
  });

  const [activeCard, setActiveCard] = useState(null);

  const data = [
    { id: '1', name: 'Ahamed Saliha', class: '10', section: 'A' },
    { id: '2', name: 'Arun Kumar', class: '10', section: 'B' },
    { id: '3', name: 'Emily Johnson', class: '11', section: 'A' },
    { id: '4', name: 'Michael Brown', class: '11', section: 'B' },
    { id: '5', name: 'Linda Davis', class: '12', section: 'A' },
    { id: '6', name: 'James Wilson', class: '12', section: 'B' },
    { id: '7', name: 'Zulfia', class: '12', section: 'C' },
    { id: '9', name: 'Archana', class: '9', section: 'A' },
    { id: '10', name: 'Chenthamizh', class: '10', section: 'A' },
    { id: '11', name: 'Ezhil', class: '11', section: 'A' },
    { id: '12', name: 'Dharshini', class: '8', section: 'A' },
    { id: '13', name: 'Faizal', class: '7', section: 'A' },
    { id: '14', name: 'Tharun', class: '10', section: 'B' },
    { id: '15', name: 'Vignesh', class: '11', section: 'C' },
    { id: '16', name: 'Anu Sri', class: '1', section: 'A' },
    { id: '17', name: 'Sujitha Mary', class: '10', section: 'C' },
    { id: '18', name: 'Yazhini', class: '12', section: 'C' },
    { id: '19', name: 'Xander', class: '8', section: 'C' },
    { id: '20', name: 'Zubair', class: '12', section: 'C' },
  
  ];

  const handleSearchChange = (e) => {
    const { id, value } = e.target;
    setSearchValues({ ...searchValues, [id]: value });
  };

  const filterData = () => {
    return data.filter(item => 
      (searchValues.id === '' || item.id.toLowerCase().includes(searchValues.id.toLowerCase())) &&
      (searchValues.name === '' || item.name.toLowerCase().includes(searchValues.name.toLowerCase())) &&
      (searchValues.class === '' || item.class.toLowerCase().includes(searchValues.class.toLowerCase())) &&
      (searchValues.section === '' || item.section.toLowerCase().includes(searchValues.section.toLowerCase()))
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
          <span style={{paddingLeft:'30px'}}>ROLL NO</span>
          <span style={{paddingLeft:'150px'}}>NAME</span>
          <span style={{paddingLeft:'180px'}}>CLASS</span>
          <span style={{paddingLeft:'190px'}}>SECTION</span>
          <br/>
          <input
            type="text"
            id="id"
            placeholder="Search by ID"
            value={searchValues.id}
            onChange={handleSearchChange}
            style={{marginRight:"30px"}}
          />
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
            id="class"
            placeholder="Search by Class"
            value={searchValues.class}
            onChange={handleSearchChange}
            style={{marginRight:"30px"}}
          />
          <input
            type="text"
            id="section"
            placeholder="Search by Section"
            value={searchValues.section}
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
              <span style={{paddingRight:"30px",paddingLeft:'180px'}}>ID: {item.id}</span>
              <span style={{paddingRight:"30px"}}>Name: {item.name}</span>
              <span style={{paddingRight:"30px"}}>Class: {item.class}</span>
              <span style={{paddingRight:"30px"}}>Section: {item.section}</span>
              <Link to={`/studentportfolio/${item.id}`} style={{color: "blue"}}>Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSearching;
