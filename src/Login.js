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

        setFormData({...formData, [name]: value});
        console.log(`${name}: ${value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: formData.username,
            password: formData.password,
        };

        fetch(API_URI, { method: 'POST', body: JSON.stringify(data), headers: {'type': 'application/json'}, })
        .then(response => response.json)
        .then(loggeData => {
            setFormData({ username: '', password: '', });
            console.log(loggeData);
        });


        
    }



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