import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './Registration.css';


const Registration = () => {
    return(

        <div className="Div">
        <form >
          {/* Name Input */}
          <div>
            <label htmlFor="name">Username:</label>
            <input type="text" id="Username" name="Username" required/>
          </div>
  
  
          {/* Password Input */}
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/>
          </div>
  
          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword">Address:</label>
            <input type="text" id="address" name="address" required/>
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