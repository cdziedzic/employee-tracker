import mysql from "mysql2";
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "HR_db"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
  });

  export default connection;