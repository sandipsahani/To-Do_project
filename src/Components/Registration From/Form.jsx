import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import InputField from "./Input";
// import "./Input.css";


const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    age: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registrationData", JSON.stringify(formData));
    alert("Registration successful! Please log in.");
    window.location.href = '/Login';
    // navigate("/login");
  };

  return (
    <center>
      <fieldset className="form-fieldset">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form-title">Registration Form</h2>
          <div className="form-group">
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            
          />
          </div>
          <div className="form-group" >
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <InputField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          </div>
          <button type="submit" className="form-submit" id="Two">
            Register
          </button>
        </form>
      </fieldset>
    </center>
  );
};

export default Form;
// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('user', JSON.stringify(formData));
//     alert('Registration successful! Please log in.');
//     window.location.href = '/Login';
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;
// import React, { useState } from 'react';
// import "./Input.css";
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('user', JSON.stringify(formData));
//     alert('Registration successful! Please log in.');
//     window.location.href = '/Login';
//   };

//   return (
//     <center>
//       <fieldset>
//     <form onSubmit={handleSubmit} className="form">
//       <div>
//       <h2 className="form-title">Registration Form</h2>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//       </div>
//       <button type="submit" className="form-submit" id="Two">Register</button>
//     </form>
//     </fieldset>
//     </center>
//   );
// };

// export default RegistrationForm;

