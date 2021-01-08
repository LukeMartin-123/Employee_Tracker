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
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start()
});

var start = function () {
    inquirer
        .prompt({
            name: "startSelection",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Department", "Add Role", "Update Employee Role"]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Departments":
                    // multiSearch();
                    break;

                case "View All Roles":
                    // rangeSearch();
                    break;

                case "Add Employee":
                    // songSearch();
                    break;

                case "Add Department":
                    // songSearch();
                    break;

                case "Add Role":
                    // songSearch();
                    break;

                case "Update Employee":
                    // songSearch();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

//   Function for viewing all Employees
var viewEmployees = function () {
    var query = "SELECT * FROM employeeTracker_DB.employees"
    connection.query(query,
        function (err, res) {
            if (err) throw err;
        }
    )
    viewEmployees()
    console.table(query)
}


//   Function for viewing all Departments

//   Function for viewing all Roles

//   Function for Adding Employee

//   Function for Adding Department

//   Function for Adding Role

//   Function for Updating Employee Role