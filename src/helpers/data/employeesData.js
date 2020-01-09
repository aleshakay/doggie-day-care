import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEmployeesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((result) => {
      const allEmployeesObj = result.data;
      const employees = [];
      if (allEmployeesObj != null) {
        Object.keys(allEmployeesObj).forEach((employeeId) => {
          const newEmployee = allEmployeesObj[employeeId];
          newEmployee.id = employeeId;
          employees.push(newEmployee);
        });
      }
      resolve(employees);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleEmployee = (employeeId) => axios.get(`${baseUrl}/employees/${employeeId}.json`);

const saveEmployee = (employeeInfo) => axios.post(`${baseUrl}/employees.json`, employeeInfo);

const updateEmployee = (employeeId, newEmployeesInfo) => axios.put(`${baseUrl}/employees/${employeeId}.json`, newEmployeesInfo);

export default {
  getEmployeesByUid,
  getSingleEmployee,
  saveEmployee,
  updateEmployee,
};
