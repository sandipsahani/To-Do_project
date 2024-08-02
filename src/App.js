import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoInput from './Components/TodoInput/TodoInput';
import RegistrationForm from './Components/RegistrationForm/Form';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Table from './Components/Table/Table';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/Login';
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <RegistrationForm />} />
          <Route path="/Login" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
          <Route path="/TodoInput" element={isLoggedIn ? <TodoInput /> : <Login onLogin={handleLogin} />}/>
          <Route path="/Table" element={isLoggedIn ? <Table /> : <Login onLogin={handleLogin} />} />        
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


