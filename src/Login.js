import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Login.css';
import React from 'react';
import { useState } from 'react';

const API_URI = window.location.host === 'localhost' ? 'http://localhost:3000/users/login' : '';


const Login = () => {



    return(
        <div>
      <form >
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    );
    
};


export default Login;