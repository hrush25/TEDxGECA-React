const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "admin1",
    database: "tedxgeca",
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to databse !!");
});

module.exports = con;