const express = require('express');

// Controllers
const {
    createEmployee,
    getAllEmployees,
    getEmployeeByCode,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee.controller');

const employeeRouter = express.Router();

employeeRouter.post("/",createEmployee);
employeeRouter.get("/",getAllEmployees);
employeeRouter.patch("/:code",updateEmployee);
employeeRouter.delete("/:code",deleteEmployee);
employeeRouter.get("/:code",getEmployeeByCode);

module.exports = employeeRouter ;