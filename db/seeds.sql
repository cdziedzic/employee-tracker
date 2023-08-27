INSERT INTO department (name)
VALUES ("Sales"), 
       ("Engineering"),
       ("Legal"),
       ("Finance");

INSERT INTO role (title, department_id, salary)
VALUES ("Salesperson", 1, 80000),
       ("Sales Lead", 1, 100000),
       ("Software Engineer", 2, 120000),
       ("Lead Engineer", 2, 150000),
       ("Account manager", 4, 160000),
       ("Accountant", 4, 125000),
       ("Legal Team Lead", 3, 250000),
       ("Lawyer", 3, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 2, null),
       ("Mike", "Chan", 1, 1),
       ("Ashley", "Rodriguez", 4, null),
       ("Kevin", "Tupik", 4, 3),
       ("Kunal", "Singh", 5, null),
       ("Malia", "Brown", 6, 5),
       ("Sarah", "Lourd", 7, null),
       ("Tom", "Allen", 8, 7)