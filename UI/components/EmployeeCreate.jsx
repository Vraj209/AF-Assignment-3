import React from "react";
import EmployeeFunction from "../server/EmployeeFunction";

export default class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
    this.employeeDataValidator = this.employeeDataValidator.bind(this);
  }

  employeeDataValidator = function (e) {
    e.preventDefault();

    const Values = {};
    new FormData(e.target).forEach((value, key) => {
      if (key === "Age") Values[key] = parseInt(value.trim());
      else Values[key] = value.trim();
    });

    let error = "";

    if (Values.firstName === "") error += "\n First name is required";
    if (Values.lastName === "") error += "\n Last name is required";
    if (Values.age > 70 || Values.age < 20)
      error += "\n Age must be between 20 to 70";

    if (error.length > 0) {
      this.setState({ error: error });
    } else {
      EmployeeFunction.createNewEmployee(Values);
    }
  };

  render() {
    const containerStyle = {
      textAlign: "center",
      marginTop: "20px",
    };

    const headingStyle = {
      fontSize: "2.5rem",
      fontWeight: "bold",
      margin: "20px 0", // Adjusted margin above and below the heading
      color: "#1E495B", // Dark blue-green
    };

    const labelStyle = {
      display: "inline-block",
      width: "25%",
      color: "#1E495B",
      textAlign: "right",
      paddingRight: "10px", // Adjusted padding
      marginBottom: "10px", // Adjusted margin
      fontSize: "1.2rem",
    };

    const inputStyle = {
      width: "50%",
      padding: "10px",
      margin: "10px 0 20px 0", // Adjusted margin
      color: "#1E495B",
      borderRadius: "20px",
      border: "2px solid #1E495B",
      boxSizing: "border-box",
      fontSize: "1rem",
    };

    const errorStyle = {
      margin: "1rem",
      display: "block",
      color: "red",
      fontSize: "1rem",
    };

    const buttonStyle = {
      padding: "1rem",
      cursor: "pointer",
      backgroundColor: "#1E495B",
      borderRadius: "20px",
      fontSize: "1.5rem",
      textAlign: "center",
      color: "white",
      display: "block",
      margin: "0 auto",
      transition: "background-color 0.3s ease-in-out",
    };

    return (
      <section style={containerStyle}>
        <h2 style={headingStyle}>Add Employee Data</h2>
        <form onSubmit={this.employeeDataValidator}>
          <div>
            <label style={labelStyle} htmlFor="firstName">
              First Name:
            </label>
            <input
              style={inputStyle}
              type="text"
              name="FirstName"
              id="firstName"
              placeholder="Enter first Name"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">
              Last Name:
            </label>
            <input
              style={inputStyle}
              type="text"
              name="LastName"
              id="lastName"
              placeholder="Enter last Name"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="age">
              Age:
            </label>
            <input
              style={inputStyle}
              type="number"
              name="Age"
              id="age"
              placeholder="Enter age"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="dateOfJoining">
              Date of joining:
            </label>
            <input
              style={inputStyle}
              type="date"
              name="DateOfJoining"
              id="dateOfJoining"
              placeholder="Enter date of joining"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="title">
              Title:
            </label>
            <select style={inputStyle} id="title" name="Title">
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Director">Director</option>
              <option value="VP">VP</option>
            </select>
          </div>
          <div>
            <label style={labelStyle} htmlFor="department">
              Department:
            </label>
            <select style={inputStyle} id="department" name="Department">
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div>
            <label
              style={labelStyle}
              htmlFor="employeeType"
              name="EmployeeTlpe"
            >
              Employee Type:
            </label>
            <select style={inputStyle} name="EmployeeType" id="employeeType">
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
              <option value="Contract">Contract</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>
          <input name="CurrentStatus" id="currentStatus" value={1} hidden />
          {/* <label style={labelStyle} htmlFor="currentStatus">
            Current Status:
          </label>
          <input style={inputStyle} name="CurrentStatus" id="currentStatus" placeholder="Enter 1 for working or Enter 0 retired" /> */}
          <span style={errorStyle}>
            <pre>{this.state.error}</pre>
          </span>
          <button type="submit" style={buttonStyle}>
            Add Employee
          </button>
        </form>
      </section>
    );
  }
}
