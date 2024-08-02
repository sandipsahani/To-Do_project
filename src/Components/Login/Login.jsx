import React, { useState, useEffect } from "react";
import "./Login.css";
import Input from "../shared/Input";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [storedUser, setStoredUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("registrationData"));
    if (user) {
      setStoredUser(user);
      console.log("Registration data loaded", user);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      alert("Login successful!");
      onLogin();
      window.location.href = "/TodoInput";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <center>
      <fieldset className="border p-4 rounded-lg max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title text-2xl font-bold mb-4">Login Form</h2>
          <div className="label mb-4">
            <input
              label="Email:"
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
            <input
              label="Password:"
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
