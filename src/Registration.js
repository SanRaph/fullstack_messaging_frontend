import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Registration.css';
import React from 'react';
import { useState } from 'react';


const Registration = () => {

    const [ formData, setFormData ] = useState({username: '', password: '', address: '',});




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
        console.log(`${name}: ${value}`);
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
            <Button bg="primary" type="submit">Register</Button>
          </div>
        </form>

        
      </div>


 );
};

export default Registration;