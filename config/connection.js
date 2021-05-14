
// Connection to MySQL
const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
    herokuConnect = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
  connection = mysql.createConnection ({
    host: 'localhost',
    port: 5000,
    user: 'root',
    password: 'Pepper0806!',
    database: 'burgers_db',
});


// connecting MySQl
connection.connect(function(err) {
   if (err) {
        console.error("error connecting: "+ err.stack)    
        return;
    }
    console.log("connected as id " + connection.threadId);
 });

// connecting to heroku 

var herokuConnect; 


    herokuConnect = mysql.createConnection({
        host: "y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "fndv7j0iebvh9n43",
        password: "f21evm5b6sh8u9au",
        database: "ztgnnap4h1k2az1j",
    });
};

module.exports = connection;
