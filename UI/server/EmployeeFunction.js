// Functions
// Import GraphQL Queries
// require("dotenv").config();
const {
  GET_EMPLOYEE_BY_ID_QUERY,
  FETCH_EMPLOYEES_BY_FILTER_QUERY,
  DELETE_EMPLOYEE_BY_ID_MUTATION,
  CREATE_NEW_EMPLOYEE_MUTATION,
  UPDATE_EMPLOYEE_MUTATION,
} = require("./graphQlQueries");

const fetchEmployeesByFilter = async (filter) => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: FETCH_EMPLOYEES_BY_FILTER_QUERY,
      variables: { filter },
    }),
  });

  if (response.ok) {
    const body = await response.json();
    return body.data.getAllEmployees;
  }
  console.error("GraphQL request failed:", response.status);
};

const deleteEmployeeById = async (id) => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: DELETE_EMPLOYEE_BY_ID_MUTATION,
      variables: { id },
    }),
  });

  if (response.ok) {
    await response.json();
    return true;
    // console.log(body);
  } else {
    console.error("GraphQL request failed:", response.status);
  }
};

const createNewEmployee = async (emp) => {
  console.log(emp);
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: CREATE_NEW_EMPLOYEE_MUTATION,
      variables: { emp },
    }),
  });

  if (response.ok) {
    await response.json();
    alert("Employee added successfully!");
    return true;
  } else {
    console.error("GraphQL request failed:", response.status);
  }
};

const getEmployeeById = async (id) => {
  console.log(typeof id, id);
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_EMPLOYEE_BY_ID_QUERY,
      variables: { id: Number(id) },
    }),
  });

  if (response.ok) {
    const body = await response.json();
    return body.data.getEmployeeById;
  } else {
    console.error("GraphQL request failed:", response.status);
  }
};

const updateEmployeeById = async (emp) => {
  // Ensure id is treated as an integer
  emp.id = Number(emp.id);
  console.log(emp);
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: UPDATE_EMPLOYEE_MUTATION,
      variables: { emp }, // Spread the properties of emp
    }),
  });

  if (response.ok) {
    await response.json();
    console.log("Update Employee Input:", emp);
    alert("Employee updated successfully!");
    return true;
  } else {
    console.log("Update Employee Input:", emp);
    console.error("GraphQL request failed:", response.status);
  }
};

module.exports = {
  fetchEmployeesByFilter,
  deleteEmployeeById,
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
};
