const mysql = require("mysql2");
require('dotenv').config();



// const host = process.env.DB_HOST;
// const user = process.env.DB_USER;
// const password = process.env.DB_PASS;
// const database = process.env.DB_NAME;

const connDB = mysql.createConnection({
    host: process.env.DB_HOST, // Change this to your MySQL server hostname
    user: process.env.DB_USER, // Change this to your MySQL username
    password: process.env.DB_PASS, // Change this to your MySQL password
    database: process.env.DB_NAME, // Name of the MySQL database to connect to
    port: 3306,
  });


  module.exports = connDB;