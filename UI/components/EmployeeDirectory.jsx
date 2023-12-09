import React from "react";

import EmployeeSearch from "./EmployeeSearch.jsx";
import EmployeeTable from "./EmployeeTable.jsx";
// import EmployeeFunction from "../server/EmployeeFunction";
import EmployeeFunction from "../server/EmployeeFunction";

// import EmployeeFunction from "../server/EmployeeFunction.js";

export default class EmployeeDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      employeeFilter: "",
    };
    // bind functions
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.updateEmployeeList = this.updateEmployeeList.bind(this);
  }

  async componentDidMount() {
    // fetch employees on component mount
    this.updateEmployeeList();
  }

  // delete employee in database with matching id
  async onDeleteClick(id) {
    try {
      const empData = await EmployeeFunction.getEmployeeById(id);
      // console.log("empData", empData);
      if (empData && empData.CurrentStatus == 1) {
        alert("CAN’T DELETE EMPLOYEE – STATUS ACTIVE");
        return false;
      } else {
        await EmployeeFunction.deleteEmployeeById(id);
        this.updateEmployeeList();
        alert("Employee deleted successfully!");
      }
    } catch (error) {
      throw error;
    }
  }

  // fetch employee based on new filter and update state
  async onFilterChange(filter) {
    this.setState({
      employees: await EmployeeFunction.fetchEmployeesByFilter(filter),
    });
  }

  async updateEmployeeList() {
    const data = await EmployeeFunction.fetchEmployeesByFilter(
      this.state.employeeFilter
    );
    this.setState({ employees: data });
  }

  render() {
    return (
      <React.Fragment>
        <EmployeeSearch
          onFilterChange={(filter) => this.onFilterChange(filter)}
        />
        <EmployeeTable
          employees={this.state.employees}
          onDeleteClick={(id) => this.onDeleteClick(id)}
        />
      </React.Fragment>
    );
  }
}
