// Connection to MySQL
const MySQL = require('mysql');
let connection; 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection ({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Pepper0806!",
    database: "burgers_db"
    });
}

// connecting MySQl

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: "+ err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;