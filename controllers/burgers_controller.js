// Requires Express 
var express = require("express");
// Linking burger.js
var burger = require("../models/burger.js");
// Router 
var router = express.Router();

// creating routes 
router.get("/", function(req, result) {
    burger.all(function (data) {
        var burgerSelection= {
            burgers: data
        };
        console.log(burgerSelection);
        res.render("index", burgerSelection);
    });
});

router.post()