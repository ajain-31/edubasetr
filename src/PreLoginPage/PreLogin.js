import React from 'react';

import './PreLogin.css';
import { useNavigate } from 'react-router-dom';

const PreLogin = () => { 
  const navigate = useNavigate();

  const handleLogin = () => 
  {
     navigate('/StudentLogin');
  }; 
  const handleStafLogin=()=> 
  {
    navigate('/StaffLogin');
  }
  const handleAdminLogin=()=> 
  {
    navigate('/AdminLogin');
  }

  return (
    <div className="card-container">
      <div className="card" style={{width:"350px",height:"800px"}}>
        <img src="https://www.pngkey.com/png/detail/400-4003680_registration-for-under-graduate-student-icon-png.png" alt="Loading" className='std-login-img'/>
        <h2 style={{paddingTop:"10px"}}>Student Login</h2>
        <button onClick={handleLogin}>Student Login</button>
      </div>
      <div className="card" style={{width:"350px",height:"800px"}}>
        <img src="https://static.vecteezy.com/system/resources/previews/014/003/638/original/female-teacher-in-classroom-smiling-woman-teacher-standing-by-blackboard-or-chalkboard-in-the-classroom-school-and-learning-concept-teacher-s-day-vector.jpg" alt="Loading" className='stf-login-img'/>
        <h2 style={{paddingTop:"30px"}}>Staff Login</h2>
        <button onClick={handleStafLogin}>Staff Login</button>
      </div>
      <div className="card" style={{width:"350px",height:"800px"}}>
        <img src="https://thumbs.dreamstime.com/b/print-302238697.jpg" alt="Loading" className='admin-login-img'/>
        <h2>Admin Login</h2>
        <button onClick={handleAdminLogin}>Admin Login</button>
      </div>
    </div>
  );
};

export default PreLogin;

