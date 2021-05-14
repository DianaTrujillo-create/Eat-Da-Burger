// Importing MySQL connection
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
}

function objToSQL(obj) {
    var arr = [];

    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    }

        return arr.toString();
}

var orm = {
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result) {
            if (err) {
             throw err;
            }
            callback(result);
        });
    },

    create: function(table,cols,values,callback) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        
        connection.query(queryString, values, function(err,result) {
            if (err) {
                 throw err; 
            }
            callback(reult);
        });
    },

    update: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += "SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            } 
            callback(result);
        });
    },

    delete: function(table, condition, callback) {
        var queryString = "DELETE FROM " + table;
        queryString += "WHERE ";
        queryString += condition;

        connection.query(queryString, function(err,result) {
            if (err) {
                throw err;
            } 
            callback(result);
        });
    }
}

module.exports = orm;