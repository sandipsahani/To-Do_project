import React from 'react';
import './Input.css';



const Input = ({ label, type, name, value, onChange }) => (
  <div className="input-group" >
    <label className="input-label">{label}</label>
    <input
      className="input-field"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
     
    />
  </div>
);

export default Input;
