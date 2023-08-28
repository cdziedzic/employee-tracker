import inquirer from 'inquirer';
import Query from './db/index.mjs'
import connection from './db/connection.mjs';
const newQuery = new Query
let choices;


export let {userChoice, addedDepartment, newRole, newRoleSalary, newRoleDepartment} = await inquirer
.prompt ([
    
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role'] 
        },
        {
        type: "input",
        name: "addedDepartment",
        message: "What should the new department be called?",
        when: (answers) => answers.userChoice === 'Add a department'
        },
        {
        type: "input",
        name: "newRole",
        message: "What should the new role be called?",
        when: (answers) => answers.userChoice === 'Add a role'
        },
        {
        type: "input",
        name: "newRoleSalary",
        message: "What is the role's salary?",
        when: (answers) => answers.userChoice === 'Add a role'
        },
        {
        type: "list",
        name: "newRoleDepartment",
        message: "What department is the role in?",
        choices: choices,
        when: (answers) => answers.userChoice === 'Add a role'
        }
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
        break;

    case 'Add a department':
        addNewDepartment()
        break;
  
    case 'Add a role':
        populateDepartmentList()
        break;
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

function addNewDepartment() {
    newQuery.createDepartment()
    console.log('added new department')
}

function populateDepartmentList() {
    newQuery.makeDepartmentList()
    .then(data => { 
        const dataArray = (data[0])
        choices = dataArray[0].map(item => item.name)
        console.log(choices)
        return choices
    })

}

