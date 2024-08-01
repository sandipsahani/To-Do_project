import React, { useEffect, useState } from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const savedTableData = localStorage.getItem("tableData");
    if (savedTableData) {
      setTableData(JSON.parse(savedTableData));
    }
  }, []);
  const handleBack = () => {
    navigate("/TodoInput");
  };
  return (
    <div className="table-container">
      <button onClick={handleBack} className="Deep">
        {" "}
        <i class="fa-solid fa-arrow-left"></i>{" "}
      </button>
      <h1>Todo List</h1>
      {tableData.length > 0 ? (
        <table border="1" className="styled-table">
          <thead>
            <tr>
              <th>Text</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((todo, index) => (
              <tr key={index}>
                <td>{todo.text}</td>
                <td>{todo.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No todo's available</p>
      )}
    </div>
  );
};

export default TableComponent;
