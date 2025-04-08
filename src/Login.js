import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Login.css';
import React from 'react';
import { useState } from 'react';

const API_URI = window.location.host === 'localhost' ? 'http://localhost:3000/users/login' : '';


const Login = () => {

    const [formData, setFormData] = useState({});



    return(
        <div className='login-form-container'>
      <form >
        <div className='login-form-container'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className='login-form-container'>
          <label >Password</label>
          <input className='login-form-container'
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className='login-form-container login-form-container button:hover' type="submit">Login</button>
      </form>
    </div>
    );
    
};


export default Login;