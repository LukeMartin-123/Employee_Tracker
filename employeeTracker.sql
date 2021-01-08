DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  manager VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary DECIMAL NOT NULL,
  department VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO roles (title, salary, department)
VALUES ("Engineer", "100000", "Technology"); 

INSERT INTO roles (title, salary, department)
VALUES ("Accountant", "90000", "Accounting"); 

INSERT INTO roles (title, salary, department)
VALUES ("Lawyer", "150000", "Legal"); 

INSERT INTO roles (title, salary, department)
VALUES ("Sales", "85000", "Sales");

INSERT INTO roles (title, salary, department)
VALUES ("Intern", "40000", "Any");

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO departments (title)
VALUES ("Technology");

INSERT INTO departments (title)
VALUES ("Accounting");

INSERT INTO departments (title)
VALUES ("Legal");

INSERT INTO departments (title)
VALUES ("Sales")