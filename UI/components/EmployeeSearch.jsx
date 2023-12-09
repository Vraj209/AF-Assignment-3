import React from "react";

export default class EmployeeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.employeeTypeChangeHandler = this.employeeTypeChangeHandler.bind(this);
  }

  // invoke parent method to handle filter change
  employeeTypeChangeHandler(evt) {
    this.props.onFilterChange(evt.target.value);
  }

  render() {
    const containerStyle = {
      textAlign: "center",
      marginTop: "20px",
    };

    const headingStyle = {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333", // Adjust the color based on your design
    };

    const labelStyle = {
      display: "block",
      fontSize: "1.2rem",
      margin: "12px 0",
    };

    const selectStyle = {
      width: "60%",
      padding: "0.5rem 10px",
      fontSize: "1rem",
    };

    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>Employee Search</h2>
        <label style={labelStyle} htmlFor="employeeType">
          Filter By Employee Type:
        </label>
        <select
          style={selectStyle}
          onChange={this.employeeTypeChangeHandler}
          name="EmployeeType"
          id="EmployeeType"
        >
          <option value="">All Employees</option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </div>
    );
  }
}
