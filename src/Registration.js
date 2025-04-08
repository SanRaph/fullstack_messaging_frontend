import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Registration.css';
const Registration = () => {
    return(

        <div className="">
        <h2>Register</h2>
        <form >
          {/* Name Input */}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
  
          {/* Email Input */}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
  
          {/* Password Input */}
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
  
          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
  
          {/* Submit Button */}
          <div>
            <Button bg="secondary" type="submit">Register</Button>
          </div>
        </form>

        
      </div>


 );
};

export default Registration;