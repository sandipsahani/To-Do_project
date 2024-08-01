import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLogoutClick = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/Home">
            <i className="fa-solid fa-house-chimney"></i>Home
          </Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/">
              <i className="fas fa-edit"></i>Registration
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/Login">
              <i className="fa-regular fa-user"></i>Login
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/TodoInput">Todo</Link>
            </li>
            <li>
              <Link to="/Table">
                <i className="fa-solid fa-table"></i>Table
              </Link>
            </li>
            <li>
              <a href="/Logout" onClick={handleLogoutClick}>
                <i className="fas fa-sign-out-alt"></i>Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const NavBar = ({ isLoggedIn, onLogout }) => {

//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/Home"><i className="fa-solid fa-house-chimney"></i>Home</Link></li>
//         <li><Link to="/"><i className="fas fa-edit"></i>Registration</Link></li>
//         <li><Link to="/Login"><i className="fa-regular fa-user"></i>Login</Link></li>
//         <li><Link to="/TodoInput">Todo</Link></li>
//         <li><Link to="/Table"> <i className="fa-solid fa-table"></i>Table</Link></li>

//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   const handleLogoutClick = (e) => {
//     e.preventDefault();
//     onLogout();
//   };

//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/Home"><i className="fa-solid fa-house-chimney"></i>Home</Link></li>
//         <li><Link to="/"><i className="fas fa-edit"></i>Registration</Link></li>
//         {!isLoggedIn && <li><Link to="/Login"><i className="fa-regular fa-user"></i>Login</Link></li>}
//         {isLoggedIn && (
//           <>
//             <li><Link to="/TodoInput">Todo</Link></li>
//             <li><Link to="/Table"><i className="fa-solid fa-table"></i>Table</Link></li>
//             <li><a href="/Logout" onClick={handleLogoutClick}><i className="fas fa-sign-out-alt"></i>Logout</a></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
