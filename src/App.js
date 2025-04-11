import './Registration';
import './App.css';
import Login from './Login'
import Registration from './Registration';
import NotFound from './404'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function App() {

  const openInTab = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if(newTab){
      newTab.opener = null;
    }
  }


  return (
    <>
        <h1 className='Text-Typed'>
           Shop{" "}<ReactTyped strings={["Here At PikinHop"]} typeSpeed={100} loop />
         </h1>
    <Router>
        <div>
        <nav>
        <ul>
            <li><Link onClick={() => openInTab('/')} to="/">Home</Link></li>
            <li><Link onClick={() => openInTab('/login')} to="/login">Login</Link></li>
            <li><Link onClick={() => openInTab('/registration')} to="/registration">Registration</Link></li>
            <li><Link onClick={() => openInTab('*')} to="*">NotFound</Link></li>
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

    </>
  );
}

export default App;
