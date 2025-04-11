import './Registration';
import './App.css';
import Login from './Login'
import Registration from './Registration';
import NotFound from './404'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function App() {
  return (
    <Router>
        <div>
         <h1 className='Text-Typed'>
           Shop{" "}<ReactTyped strings={["Here At PikinHop"]} typeSpeed={100} loop />
         </h1>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="*">NotFound</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;
