import inquirer from 'inquirer';
import Query from './db/index.mjs'
import connection from './db/connection.mjs';
const newQuery = new Query

let {userChoice} = await inquirer
.prompt ([
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'] 
        },
]) 
//execute code based on user choice
switch (userChoice) {
    case 'View all departments':
        viewAllDeparments()
        
        break;

    case 'View all roles':
        viewAllRoles()
        break;

    case 'View all employees':
        viewAllEmployees()
    default:
        break;
}

function viewAllDeparments() {
  
    newQuery.findAllDepartments()
    .then(data => {
        console.table(data[0])
       
    })
}

function viewAllRoles() {
    newQuery.findAllRoles()
    .then(data => {
        console.table(data[0])
    })
}

function viewAllEmployees() {
    newQuery.findAllEmployees()
    .then(data => {
        console.table(data[0])
    })
}