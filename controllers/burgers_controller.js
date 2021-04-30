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

router.post("/api/burgers", function(req, result) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, result) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, result) {
    var condition = "ID = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export so we can use on server 
module.exports = router;