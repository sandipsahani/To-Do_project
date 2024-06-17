import React, { useState } from 'react';
import './Login.css';
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('registrationData'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      alert('Login successful!');
      onLogin();
      window.location.href = '/TodoInput';
    } else {
      alert('Invalid credentials');
    }
  };

  

  return (
    <center>
    <fieldset >
     
    <form onSubmit={handleSubmit}>
    <h2 className="form-title">Login Form</h2>
      <div className='label'>
        <label >Email:</label> 
        <input type="email" name="email" value={formData.email} onChange={handleChange} required  className="input-field" placeholder='Enter your Email ' />
      </div>
      <div className='label'>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required  className="input-field" placeholder='Enter your password'/>
      </div>
      <button type="submit"  className="Two" >Login</button>
    </form>
  <div></div>
    </fieldset>
    </center>
  );
  
};

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//      const registrationData = JSON.parse(localStorage.getItem('registrationData'));

//     if (registrationData && email === registrationData.email && password === registrationData.password) {
//       alert('Login successful!');
//       navigate("/TodoInput"); 
//     } else {
//       alert('Invalid email or password');
//     }
//   }

//   return (
//     <fieldset>
//       <center>
       
//         <h2>Login Form</h2>
//         <div>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="input-field"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             className="input-field"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <button className="Two"  onClick={handleSubmit}>Submit</button>
//         </div>
   
//       </center>
//     </fieldset>
//   );
// };

// export default Login;
// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
//       alert('Login successful!');
//       onLogin();
//       window.location.href = '/TodoInput';
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


