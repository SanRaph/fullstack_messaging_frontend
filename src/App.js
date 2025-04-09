
import './Registration';
import './App.css';
import Login from './Login'
import Registration from './Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <h1>React Router Example</h1>
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*"  />
        </Routes>
      </div>


    </Router>
  );
}

export default App;
