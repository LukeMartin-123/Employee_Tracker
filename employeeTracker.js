var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employeeTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function start() {
    inquirer
      .prompt({
        name: "startSelection",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Department", "Add Role", "Update Employee Role" ]
      })
      .then(function(answer) {
        // based on their answer, call a certain function
        if (answer.postOrBid === "POST") {
        //   postAuction();
        }
        else if(answer.postOrBid === "BID") {
        //   bidAuction();
        } else{
          connection.end();
        }
      });
  }


//   Function for viewing all Employees

//   Function for viewing all Departments

//   Function for viewing all Roles

//   Function for Adding Employee

//   Function for Adding Department

//   Function for Adding Role

//   Function for Updating Employee Role