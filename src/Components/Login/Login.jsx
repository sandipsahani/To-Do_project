import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const data = { email: "", password: "" };
  const [formData, setFormData] = useState({ data });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registrationData"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      alert("Login successful!");
      onLogin();
      window.location.href = "/TodoInput";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <center>
      <fieldset className="border p-4 rounded-lg max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title text-2xl font-bold mb-4">Login Form</h2>
          <div className="label mb-4">
            <label className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field w-full p-2 border rounded"
              placeholder="Enter your Email"
            />
          </div>
          <div className="label mb-4">
            <label className="block text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="Two bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </fieldset>
    </center>
  );
};

export default Login;
