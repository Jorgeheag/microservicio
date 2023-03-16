const { DataTypes } = require('sequelize');
const db = require('../dataBase'); 
const Department = require('./departament.model')

const Employee = db.define('empleado', {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nif: {
    type: DataTypes.STRING(9),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido2: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  codigo_departamento: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Employee.belongsTo(Department, { 
    foreignKey: 'codigo_departamento' 
});


module.exports = Employee;