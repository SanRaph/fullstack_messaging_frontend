
import './Registration';
import './App.css';
import Login from './Login'
import Registration from './Registration';
import NotFound from './404'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <h1>React Router Example</h1>
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
