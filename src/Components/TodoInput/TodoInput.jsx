import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoInput.css";

const Form = () => {
  const textRef = useRef();
  const dateRef = useRef();
  const [tableData, setTableData] = useState(() => {
    const savedData = localStorage.getItem("tableData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: textRef.current.value,
      date: dateRef.current.value,
    };
    const updatedTableData = [...tableData, newTodo];
    setTableData(updatedTableData);
    localStorage.setItem("tableData", JSON.stringify(updatedTableData));
    textRef.current.value = "";
    dateRef.current.value = "";
    navigate("/table");
  };

  return (
    <center>
      <div className="form-container">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Text:</label>
            <input type="text" ref={textRef} placeholder="Enter Your Text" />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" ref={dateRef} placeholder="Enter Your Date" />
          </div>
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
    </center>
  );
};

export default Form;
