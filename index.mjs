import inquirer from 'inquirer';
import Query from './db/index.mjs'
import connection from './db/connection.mjs';
const newQuery = new Query();
const newChoices = await populateDepartmentList()

let {userChoice, addedDepartment, newRole, newRoleSalary, newRoleDepartment} = await inquirer
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
        choices: newChoices,
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
        addNewDepartment(addedDepartment)
        break;
  
    case 'Add a role':
        populateDepartmentList()
        getDepartmentId(newRoleDepartment)
        // addNewRole(newRole, newRoleSalary, departmentId)
        break;
    default:
        break;
}

//call the find all departments mehtod
function viewAllDeparments() {
  
    newQuery.findAllDepartments()
    .then(data => {
        console.table(data[0])
       
    })
}
//call the view all roles mehthod
function viewAllRoles() {
    newQuery.findAllRoles()
    .then(data => {
        console.table(data[0])
    })
}
//call the find employee method
function viewAllEmployees() {
    newQuery.findAllEmployees()
    .then(data => {
        console.table(data[0])
    })
}
//call the method to make new department
function addNewDepartment(addedDepartment) {
    newQuery.createDepartment(addedDepartment)
    console.log('added new department')
}
//list to populate inquirer prompt based on sql query
async function populateDepartmentList() {
  return newQuery.makeDepartmentList()
    .then(data => {

                const newChoices = (data[0])
                
                return newChoices
    }
    )}
//find the department id based on the user selected dept name
function getDepartmentId(newRoleDepartment) {
        return newQuery.findDepartmentId(newRoleDepartment)
         .then(data => {
             const departmentId = data[0]
             console.table(departmentId)
             return departmentId
         })
     }
    