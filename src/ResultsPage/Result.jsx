import React from 'react'
import './Result.css';
import Navbar from '../NavbarFolder/Navbar'; 
const Result = () => {
  return (
    <div>
      <Navbar />
      <div className='result-login-container'>
          <h1 className='heading'>RESULTS</h1>
          <br></br>
          <label className="label">REG NO</label>
          <br></br>
          <input type="text" className="input-type"></input>
          <br></br>
          <br></br>
          <label className="label">PASSWORD</label>
          <br></br>
          <input type="passsword" className="input-type"></input>
          <br></br>
          <button className='submit'>SUBMIT</button>

      </div>
    </div>
  )
}

export default Result
