import React, { useState } from "react";

import InputField from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    age: "",
  });

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
    window.location.href = "/Login";
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
          <div className="form-group">
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
