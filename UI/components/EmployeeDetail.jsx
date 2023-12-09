/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from "react";

import EmployeeFunction from "../server/EmployeeFunction";

class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: null,
      error: null,
    };
  }

  async componentDidMount() {
    // get id route parameter
    const { id } = this.props.match.params;
    console.log(typeof id);

    try {
      // returns employee with matching id from database
      const data = await EmployeeFunction.getEmployeeById(id);
      // console.log(data, "------");
      // update state
      this.setState({ emp: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { emp, error } = this.state;
    const labelStyle = {
      display: "inline-block",
      width: "15%",
    };
    const inputStyle = {
      width: "40%",
      padding: "4px",
      margin: "10px",
    };
    const errorStyle = {
      margin: "1rem",
      display: "block",
      color: "red",
    };
    if (!emp) {
      return <div>Loading...</div>;
    }

    return (
      <section className="create-form">
        <center>
          <h3>
            <u>EMPLOYEE DETAILS</u>
          </h3>
          <form onSubmit={this.updateEmployeeHandler}>
            <div>
              <label style={labelStyle} htmlFor="firstName">
                First Name:
              </label>
              <input
                style={inputStyle}
                type="text"
                name="FirstName"
                id="firstName"
                value={emp.FirstName}
                placeholder="Enter first Name"
                disabled
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
                value={emp.LastName}
                placeholder="Enter last Name"
                disabled
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
                value={emp.Age}
                placeholder="Enter age"
                disabled
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
                value={emp.DateOfJoining}
                id="dateOfJoining"
                placeholder="Enter date of joining"
                disabled
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="employeeType">
                Employee Type:
              </label>
              <select
                style={inputStyle}
                name="EmployeeType"
                value={emp.EmployeeType}
                id="EmployeeType"
                disabled
              >
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
                <option value="Seasonal">Seasonal</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="title">
                Title:
              </label>
              <select
                style={inputStyle}
                id="title"
                value={emp.Title}
                name="Title"
                disabled
              >
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
              <select
                style={inputStyle}
                id="department"
                value={emp.Department}
                name="Department"
                disabled
              >
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="currentStatus">
                Current Status:
              </label>
              <select
                style={inputStyle}
                id="currentStatus"
                value={emp.CurrentStatus}
                name="CurrentStatus"
                disabled
              >
                <option value="1">Working</option>
                <option value="0">Retired</option>
              </select>
              <div>
                <label style={labelStyle} htmlFor="retirementDay">
                  Retirement Days:
                </label>
                <input
                  style={inputStyle}
                  type="number"
                  name="RetirementDay"
                  id="retirementDay"
                  value={this.state.remainingDays}
                  placeholder="Retirement Days"
                  disabled
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="retirementMonth">
                  Retirement Month:
                </label>
                <input
                  style={inputStyle}
                  type="number"
                  name="RetirementMonth"
                  id="retirementMonth"
                  value={this.state.remainingMonths}
                  placeholder="Retirement month"
                  disabled
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="retirementYear">
                  Retirement Year:
                </label>
                <input
                  style={inputStyle}
                  type="number"
                  name="RetirementYear"
                  id="retirementYear"
                  value={this.state.remainingYears}
                  placeholder="Retirement Year"
                  disabled
                />
              </div>
            </div>
            <span style={errorStyle}>
              <pre>{error}</pre>
            </span>
          </form>
        </center>
      </section>
    );
  }
}

export default EmployeeDetail;
