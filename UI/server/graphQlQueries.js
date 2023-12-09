// GraphQL Queries

const GET_EMPLOYEE_BY_ID_QUERY = `
  query GetEmployeeById($id: Int) {
    getEmployeeById(id: $id) {
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

const FETCH_EMPLOYEES_BY_FILTER_QUERY = `
  query GetAllEmployees($filter: String) {
    getAllEmployees(filter: $filter) {
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

const DELETE_EMPLOYEE_BY_ID_MUTATION = `
  mutation DeleteEmployeeById($id:Int) {
    deleteEmployeeById(id: $id)
  }
`;

const CREATE_NEW_EMPLOYEE_MUTATION = `
  mutation CreateNewEmployee($emp: EmployeeInput!) {
    createNewEmployee(emp: $emp) {
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

const UPDATE_EMPLOYEE_MUTATION = `
  mutation UpdateEmployee($emp: EmployeeInput) {
    updateEmployeeById(emp: $emp){
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

module.exports = {
  GET_EMPLOYEE_BY_ID_QUERY,
  FETCH_EMPLOYEES_BY_FILTER_QUERY,
  DELETE_EMPLOYEE_BY_ID_MUTATION,
  CREATE_NEW_EMPLOYEE_MUTATION,
  UPDATE_EMPLOYEE_MUTATION,
};
