// Importing MySQL connection
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i =0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
}

function objToSQL(obj) {
    var arr = [];

    for (var key in obj) {
        var val = obj[key];

        if(Object.hasOwnProperty.call(obj, key)) {
            if(typeof value === "string" && value.indexOf(" ") >=0) {
                value = " " + value + " ";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}