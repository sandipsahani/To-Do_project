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


// import React from 'react';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import TodoInput from './Components/TodoInput';
// import Form from './Components/Registration From/Form';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login'
// import Table from './Components/Table';
// import Navbar from './Components/navbar/Navbar';



// function App() {
//   return (
//     <Router>
//     <div className="app-container">
      
//     <Navbar />
//         <Routes>
       
//           <Route path="/Home" element={<Home />} /> 
//           <Route path="/TodoInput" element={<TodoInput />} />
//           <Route path="/Table" element={<Table />} />
//           <Route path="/" element={<Form />} />
//           <Route path="/Login" element={<Login />} />
          
          
          
//         </Routes>
     
//     </div>
//     </Router>
//   );
// }

// export default App;

// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
// // import TodoInput from './Components/TodoInput';
// // import RegistrationForm from './Components/Registration From/Form';
// // import Home from './Components/Home/Home';
// // import Login from './Components/Login/Login';
// // import Table from './Components/Table';
// // import Navbar from './Components/navbar/Navbar';

// // const App = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
 

// //   useEffect(() => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const loggedInStatus = urlParams.get('loggedIn') === 'true';
// //     setIsLoggedIn(loggedInStatus);
// //   }, []);

// //   const handleLogin = () => {
// //     setIsLoggedIn(true);
// //     window.location.href = window.location.pathname + '?loggedIn=true';
// //   };

// //   const handleLogout = () => {
// //     setIsLoggedIn(false);
// //     window.location.href = window.location.pathname + '?loggedIn=false';
// //   };

// //   return (
// //     <Router>
// //     <div className="app-container">
// //       <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
// //       <Routes>
// //         <Route path="/Home" element={<Home />} />
// //         <Route path="/" element={<RegistrationForm />} />
// //         <Route path="/Login" element={<Login onLogin={handleLogin} />} />
// //         <Route path="/TodoInput" element={isLoggedIn ? <TodoInput /> : <Login onLogin={handleLogin} />} />
// //         <Route path="/Table" element={isLoggedIn ? <Table /> : <Login onLogin={handleLogin} />} />
// //       </Routes>
// //     </div>
// //         </Router>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TodoInput from './Components/TodoInput';
// import RegistrationForm from './Components/Registration From/Form';
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
// import Table from './Components/Table';
// import Navbar from './Components/navbar/Navbar';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
//     setIsLoggedIn(loggedInStatus);
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem('isLoggedIn', 'false');
//     window.location.href = '/Login';
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/" element={<RegistrationForm />} />
//           <Route path="/Login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/TodoInput" element={isLoggedIn ? <TodoInput /> : <Login onLogin={handleLogin} />} />
//           <Route path="/Table" element={isLoggedIn ? <Table /> : <Login onLogin={handleLogin} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
