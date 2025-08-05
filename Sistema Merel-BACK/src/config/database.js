const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Merel', 'root', 'fischl', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Conectado a la base de datos.'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = sequelize;

// (lo tuyo)
/*const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;*/
