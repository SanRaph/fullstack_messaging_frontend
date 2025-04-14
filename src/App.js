import './Registration';
import './App.css';
import Login from './Login'
import Registration from './Registration';
import NotFound from './404'
import Home from './Home'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'home') return <Home />;
    if (page === 'login') return <Login />;
    if (page === 'registration') return <Registration />;
    if (page === 'notfound') return <NotFound />;
  };

  const openInTab = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if(newTab){
      newTab.opener = null;
    }
  }


  return (
    <div>

<nav className="menu" id="nav">
  <span className="nav-item">
		<p onClick={() => setPage('home')}>Home</p>
	</span>

	<span className="nav-item">
		<p href="#">Search</p>
	</span>

	<span className="nav-item">
		<p href="#">Notifications</p>
	</span>

	<span className="nav-item">
		<p href="#">Favorites</p>
	</span>
  
	<span className="nav-item">
		<p href="#">Your Profile</p>
	</span>

  <span className="nav-item">
		<p onClick={() => setPage('login')}>Login</p>
	</span>

  <span className="nav-item">
    <p onClick={() => setPage('registration')}>Registration</p>
	  </span>
</nav>
 

      {renderPage()}
    </div>
  );
}

export default App;
