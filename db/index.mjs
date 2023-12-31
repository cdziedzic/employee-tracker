import connection from './connection.mjs'

//class to include methods for each query
export default class Query {
    constructor() {
        this.connection = connection
    }
    //select all departments
    findAllDepartments() {
        return this.connection.promise().execute('SELECT * from department')
    }
    findAllRoles() {
        return this.connection.promise().execute(`SELECT role.id as "role id", title, department.name as department, salary from role
    left JOIN department on role.department_id = department.id`)
    }
    findAllEmployees() {
        return this.connection.promise().query(`select employee.id as "employee id", employee.first_name, employee.last_name, role.title as title, department.name as department, role.salary, CONCAT(m.first_name, ' ', m.last_name) as manager from employee
left join role on employee.role_id = role.id
left join department on role.department_id = department.id
left join employee m on employee.manager_id = m.id`)
    }
    createDepartment(addedDepartment) {
        return this.connection.promise().query(`INSERT INTO department (name)
    VALUES (?)`, addedDepartment)
    }

    makeDepartmentList() {
        return this.connection.promise().execute('SELECT name from department')
    }
    createNewRole([newRole, newRoleSalary, departmentId]) {
       return this.connection.promise().execute(`INSERT INTO role (name, salary,department_id)
        VALUES (?, ?, ?);`, [newRole, newRoleSalary, departmentId])
    }
    findDepartmentId(newRoleDepartment){
        return this.connection.promise().execute(`select distinct department.id from department 
        join role on department.id = role.department_id
        
        where name = ?`, [newRoleDepartment])
    }
}

