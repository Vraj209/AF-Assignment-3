import React from "react";
import RetirementEmployeeSearch from "./RetirementEmployeeSearch.jsx";

import EmployeeFunction from "../server/EmployeeFunction";
import EmployeeTable from "./EmployeeTable.jsx";

async function queryHandler(query, variables = {}) {
  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const res = await response.json();

    if (res.errors) {
      const error = res.errors[0];
      if (
        error.extensions.code == "BAD_USER_INPUT" &&
        error.extensions.errors
      ) {
        const details = error.extensions.errors.join("\n ");
        alert(`${error.message}:\n ${details}`);
      }
    }
    return res.data;
  } catch (error) {
    alert(`Error in sending data to server: ${error.message}`);
  }
}
class UpcomingRetirementDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [],
      filteredEmp: [],
      error: null,
    };
    this.fetchData = this.fetchData.bind(this);
    this.delete = this.delete.bind(this);
  }

  async componentDidMount() {
    const query = ` query getRetireEmployee{
        getRetireEmployee{
        id
        FirstName
        LastName
        Age
        DateOfJoining
        Title
        Department
        EmployeeType
        CurrentStatus
        }
      }
         `;

    const data = await queryHandler(query);
    console.log("data", data);

    this.setState({
      emp: data?.getRetireEmployee,
      filteredEmp: data?.getRetireEmployee,
    });
  }

  fetchData = async () => {
    const query = ` query getRetireEmployee{
            getRetireEmployee{
            id
            FirstName
            LastName
            Age
            DateOfJoining
            Title
            Department
            EmployeeType
            CurrentStatus
            }
          }
             `;

    const data = await queryHandler(query);
    console.log("data-2", data);

    this.setState({
      emp: data?.getRetireEmployee,
    });
  };

  async delete(Id) {
    const query = `
    mutation DeleteEmployeeById($id:Int) {
        deleteEmployeeById(id: $id)
      }
    `;
    const resp = await queryHandler(query, { id: parseInt(id) });

    //reload employee data
    if (resp) {
      this.fetchData();
      alert("Employee deleted successfully");
    }
  }
  async onFilterChange(filter) {
    const filteredEmp = this.state.emp.filter((employee) => {
      return employee.EmployeeType.includes(filter);
    });

    this.setState({
      filteredEmp: filteredEmp,
    });
  }
  render() {
    let empInfo = this.state.filteredEmp;
    const heading = {
      padding: "10px",
      fontFamily: "Arial",
      textAlign: "center",
    };

    return (
      <div>
        <h1 style={heading}>Upcoming Retirement Directory</h1>
        <RetirementEmployeeSearch
          onFilterChange={(filter) => this.onFilterChange(filter)}
        />
        <EmployeeTable
          employees={empInfo}
          onDeleteClick={(id) => this.delete(id)}
        />
      </div>
    );
  }
}
export default UpcomingRetirementDirectory;
