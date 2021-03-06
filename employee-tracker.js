var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
const express = require("express");
const app = express();

require("dotenv").config();
console.log(process.env.db_password)

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.db_password,
  database: "employeeTracker_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  runSearch()
});

function runSearch() {
  inquirer
    .prompt([{
      name: "action",
      type: "list",
      message: "Choose one of the following actions:",
      choices: [
        "View all Employees!",
        "View all Employees by Department",
        "View all Employees by Manager",
        "Add an Employee",
        "Remove an Employee",
        "Update an Employee",
        "Update an Employee's Role",
        "Update an Employee's Manager",
        "View all roles",
        "Add a role",
        "Remove a role",
        "Add a department"
      ],
    }])
    .then((answer)=> {
      console.log("Hello")
      console.log(answer.action)
      /* switch (answer.action) {
        case "View all Employees":
          viewAllEmployees();


        case "View all Employees by Department":
          viewAllEmployeesByDepartment();


        case "View all Employees by Manager":
          viewAllEmployeesbyManager();


        case "Add an Employee":
          addEmployee();


        case "Remove an Employee":
          removeEmployee();


        case "Update an Employee":
          updateEmployee();


        case "Update an Employee's Role":
          updateEmployeeRole();


        case "Update an Employee's Manager":
          updateEmployeeManager();


        case "View all roles":
          viewAllRoles();


        case "Add a role":
          addRole();


        case "Remove a role":
          removeRole();


        case "Add a department":
          addDepartment(); */

      //};
    });
};


/* function viewAllEmployees() {
  console.log("Selecting all employees....\n");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    //log results from the SELECT statement
    console.log(res.length + " employees found.");
    console.table(res);
    runSearch();
  });
}

function viewAllEmployeesByDepartment() { }

function viewAllEmployeesByDepartment() { }

function viewAllEmployeesbyManager() { }

function addEmployee() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      let roleList = res[i].title;
      console.log(roleList);
      roleArrray.push(roleList);
    }

    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the Employee's first name?",
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the Employee's last name?",
        },
        {
          type: "rawlist",
          name: "role_id",
          message: "What is the Employee's role?",
          choices: roleArrray
        }, {
          name: "manager_id",
          type: "input",
          message: "What is the employee's manager's name?"
        }
      ])
      .then(function (answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id,
          },
          function (err) {
            if (err) throw err;
            console.log("You're employee was successfully added");
            runSearch();
          });
      })

  },


    function removeEmployee() {
      connection.query(
        "SELECT * FROM employee",
        function (err, res) {
          if (err) throw err;
          console.table(res);
          let roleArray = [];
          roleArray.push(res[0].title);
          inquirer
            .prompt([{
              name: "first_name",
              type: "input",
              message: "What is the employee's first name?"
            }, {
              name: "last_name",
              type: "input",
              message: "What is the employee's last name?"
            }, {
              name: "role_id",
              type: "rawlist",
              message: "What is the employee's role?",
              choices: roleArray
            }]).then(function (answer) {
              console.log(answer);
              connection.query(
                "DELETE FROM employee SET role_id WHERE ?", {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
              },
                function (err, res) {
                  if (err) throw err;
                  console.table(res);
                  runSearch();
                });
            });
        });

    });
};


function viewAllRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  })
};



function updateRole() { }; */
