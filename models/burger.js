// Importing ORM
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(result) {
            callback(result);
        });
    },

    create: function(cols, values, callback) {
        orm.create("burgers", cols, values, function(result) {
            callback(result);
        });
    },

    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(result) {
            callback(result);
        });
    },

    delete: function(condition, callback) {
        orm.delete("burgers", condition, function(result) {
            callback(result);
        });
    }
};

module.exports = burger;