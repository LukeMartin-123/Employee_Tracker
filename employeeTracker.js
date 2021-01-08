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

function start() {
    inquirer
        .prompt({
            name: "startSelection",
            type: "list",
            message: "What would you like to do?",
            choices: [ 
            "View All Employees", 
            "View All Departments", 
            "View All Roles", 
            "Add Employee", 
            "Add Department", 
            "Add Role", 
            "Update Employee Role",
            "Exit"
        ]
        })
        .then(function (answer) {
            switch (answer.startSelection) {
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
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
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

// ********** COME BACK AND FIX THIS ********************
//   Function for viewing all Employees
function viewEmployees() {
    var viewQuery = "SELECT * FROM employeeTracker_DB.employees"
    connection.query(viewQuery, function (err, res) { 
    if (err) throw err;
    console.table(res)
     })
    start()
}

//   Function for viewing all Departments

//   Function for viewing all Roles

//   Function for Adding Employee
function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?"
            },

            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?"
            },

            {
                name: "role",
                type: "list",
                message: "What is the employee's role?",
                choices: "Engineer, Accountant, Lawyer, Intern"
            },

            {
                name: "manager",
                type: "input",
                message: "Who is the employee's manager?",
            },
        ])
        .then(function (answer) {
            var employeeQuery = "INSERT INTO employees SET ?"
            connection.query(employeeQuery,
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role: answer.role,
                    manager: answer.manager,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your employee was successfully added!");
                    start();
                }
            )


        })
}

//   Function for Adding Role
function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of the role?"
            },

            {
                name: "salary",
                type: "input",
                message: "What is the salary for the role?"
            },

            {
                name: "department",
                type: "input",
                message: "What department is the role in??",
            },
        ])
        .then(function (answer) {
            var employeeQuery = "INSERT INTO role SET ?"
            connection.query(employeeQuery,
                {
                    title: answer.title,
                    salary: answer.salary,
                    department: answer.department,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your role was successfully added!");
                    start();
                }
            )
        })
}



//   Function for Adding Department
function addDepartment() {
    inquirer
        .prompt([
            {
                name: "departmentName",
                type: "input",
                message: "What is the name of the department?"
            },
        ])
        .then(function (answer) {
            var employeeQuery = "INSERT INTO department SET ?"
            connection.query(employeeQuery,
                {
                    name: answer.departmentName,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your department was successfully added!");
                    start();
                }
            )


        })
}


//   Function for Updating Employee Role