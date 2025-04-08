import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Registration.css';
import React from 'react';
import { useState } from 'react';

const API_URI = window.location.host === 'localhost' ? 'http://localhost:3000/users/register' : '';



const Registration = () => {

    const [ formData, setFormData ] = useState({username: '', password: '', address: '',});



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
        console.log(`${name}: ${value}`);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: formData.username,
            password: formData.password,
            address: formData.address,
        };

        fetch(API_URI, { method: 'POST', body: JSON.stringify(data), headers: {'content-type':'application/json'} })
        .then(response => response.json())
        .then(createdFormData => {
            console.log('Gone to the web');
            console.log(createdFormData);

            setFormData({username: '', password: '', address: '',});
        })

        
    };







    return(

        <div className="registration-form-container">
        <form >
          {/* Name Input */}
          <div className='registration-form-container input'>
            <label htmlFor="name">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required/>
          </div>
  
  
          {/* Password Input */}
          <div className='registration-form-container input'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
          </div>
  
          {/* Confirm Password Input */}
          <div className='registration-form-container input'>
            <label htmlFor="confirmPassword">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required/>
          </div>
  
          {/* Submit Button */}
          <div className='registration-form-container button registration-form-container button:hover'>
            <Button onClick={handleSubmit} bg="primary" type="submit">Register</Button>
          </div>
        </form>

        
      </div>


 );
};

export default Registration;