import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Registration.css';
import React from 'react';
import { useState } from 'react';


const Registration = () => {

    const [ formData, setFormData ] = useState({username: '', password: '', address: '',});




    const handleChange = () => {

    };







    return(

        <div className="Div">
        <form >
          {/* Name Input */}
          <div>
            <label htmlFor="name">Username:</label>
            <input type="text" id="Username" name="Username" value={formData.username} onChange={handleChange} required/>
          </div>
  
  
          {/* Password Input */}
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
          </div>
  
          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required/>
          </div>
  
          {/* Submit Button */}
          <div>
            <Button bg="primary" type="submit">Register</Button>
          </div>
        </form>

        
      </div>


 );
};

export default Registration;