const { DataTypes } = require('sequelize');
const db = require('../dataBase');

const Department = db.define('departamento', {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  presupuesto: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Department;