var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
const express = require("express");
const app = express();


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "QkrdmsgP0718#",
  database: "employee_tracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  // start();
  console.log("connected as id " + connection.threadId + "\n");

  start();
});