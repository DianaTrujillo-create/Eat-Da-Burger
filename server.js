var express = require("express");
var PORT = process.env.PORT || 8080; 
var app = (express);

app.use(express.static("public"));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

var exprBars = require("express-handlebars");
app.engine("handlebars", exprBars({ defaultLayout : "main"}));
app.request("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("server listening: http://localhost:" + PORT);
});