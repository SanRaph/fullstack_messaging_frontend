import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Login.css';
import React from 'react';
import { useState } from 'react';

const API_URI = window.location.host === 'localhost' ? 'http://localhost:3000/users/login' : '';


const Login = () => {

    const [formData, setFormData] = useState({username: '', password: ''});

    const handleChange = (e) => {
        const {name, value } = e.target;
        console.log(`${name}: ${value}`);
    };



    return(
        <div className='login-form-container'>
      <form >
        <div className='login-form-container'>
          <label>Username</label>
          <input
            type="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='login-form-container'>
          <label >Password</label>
          <input className='login-form-container'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}                    
            required
          />
        </div>
        <button className='login-form-container login-form-container button:hover' type="submit">Login</button>
      </form>
    </div>
    );
    
};


export default Login;