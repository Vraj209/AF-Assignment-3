const { getEmpolyeeData } = require("../db");

const generateEmployeeId = async () => {
  const instance = await getEmpolyeeData();
  const employees = await instance.find({}).toArray();
  const id = employees.length + 1;
  return id;
};

const getAllEmployees = async (filter) => {
  const instance = await getEmpolyeeData();
  if (filter) return instance.find({ EmployeeType: filter }).toArray();
  return instance.find({}).toArray();
};

const getEmployeeById = async (id) => {
  const instance = await getEmpolyeeData();
  return instance.findOne({ id });
};

const deleteEmployeeById = async (id) => {
  const instance = await getEmpolyeeData();
  return instance.deleteOne({ id });
};

const updateEmployeeById = async (emp) => {
  const instance = await getEmpolyeeData();
  emp.id = parseInt(emp.id, 10);
  // console.log(typeof emp.id); // Ensure id is treated as an integer
  const data = await instance.findOneAndUpdate({ id: emp.id }, { $set: emp });
  return data;
};

const createNewEmployee = async (emp) => {
  const instance = await getEmpolyeeData();
  emp.id = await generateEmployeeId();
  await instance.insertOne(emp);
  return emp;
};

const getRetireEmployee = async () => {
  try {
    const emp = await getEmpolyeeData();
    // console.log("emp", emp);
    const empArray = await emp.find({}).toArray();
    // console.log("empArray", empArray);
    const resEmp = [];
    const retirementAge = 65;
    const currentDate = new Date();
    const sixMonthsFromNow = new Date(
      currentDate.setMonth(currentDate.getMonth() + 6)
    );

    empArray.forEach((employee) => {
      console.log("employee-type", employee.EmployeeType);
      const dateOfJoining = new Date(employee.DateOfJoining);
      const retirementDate = new Date(dateOfJoining);
      retirementDate.setFullYear(
        retirementDate.getFullYear() + retirementAge - employee.Age
      );

      if (retirementDate <= sixMonthsFromNow) {
        resEmp.push(employee);
      }
    });
    console.log("resEmp", resEmp);
    return resEmp;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  createNewEmployee,
  getAllEmployees,
  generateEmployeeId,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
  getRetireEmployee,
};
