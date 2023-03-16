const { Sequelize } = require('sequelize');


const db = new Sequelize('mydb', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 1234,
  });

  module.exports = db;