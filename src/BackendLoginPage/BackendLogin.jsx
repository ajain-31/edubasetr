import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BackednLogin.css';
import signupImage from '../signupImage.jpg';

const BackendLogin= () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmitSignup = async () => {
        try {
            const response = await axios.post('http://localhost:9001/Fitfreak/signup', {
                name,
                email,
                password
            });

            if (response.status === 200) {
                setMessage('Signup successful');
                navigate('/AdminLands');
            } else {
                setMessage('Signup failed');
            }
        } catch (error) {
            let errorMessage = 'An error occurred';
            if (error.response) {
                // Server responded with a status other than 200
                if (error.response.data) {
                    // Extract and format error details
                    errorMessage = `Error: ${error.response.data.message || JSON.stringify(error.response.data)}`;
                } else {
                    errorMessage = 'Server error';
                }
            } else if (error.request) {
                // No response received from the server
                errorMessage = 'No response received from the server';
            } else {
                // Other errors
                errorMessage = `Error: ${error.message}`;
            }
            setMessage(errorMessage);
        }
    };

    return (
        <div className='signup-container'>
            <img src={signupImage} alt="Sign Up" className='image-card'/>
            <div>
                <h1 className='signup' style={{ fontWeight: 'bold' }}>Sign up</h1>
                <label className='element' style={{ color: 'black', paddingLeft: '40px', fontSize: '18px' }}>Enter your name</label>
                <br />
                <input 
                    type="text" 
                    className='input' 
                    style={{ padding: '5px', paddingLeft: '40px', backgroundColor: 'white' }}
                    value={name}
                    onChange={handleNameChange}
                />
                <br />
                <label className='element' style={{ color: 'black', paddingLeft: '40px' }}>Enter your email id</label>
                <br />
                <input 
                    type="text" 
                    className='input' 
                    style={{ padding: '5px', paddingLeft: '40px', backgroundColor: 'white' }}
                    value={email}
                    onChange={handleEmailChange}
                />
                <br />
                <label className='element' style={{ color: 'black', paddingLeft: '40px' }}>Enter your password</label>
                <br />
                <input 
                    type="password" 
                    className='input' 
                    style={{ padding: '5px', paddingLeft: '40px', backgroundColor: 'white' }}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <br />
                <button className='element btn' onClick={handleSubmitSignup}>Sign up</button>
                <br />
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default BackendLogin;

