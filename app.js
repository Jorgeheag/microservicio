const express = require('express');
const app = express();


const employeeRouter = require('./routers/employee.routes');
//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoinst
app.use('/api/v1/employees',employeeRouter)

app.listen(3000,()=>{
    console.log("servidor puerto 3000")
})

module.exports = app

