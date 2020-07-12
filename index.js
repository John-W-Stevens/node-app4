var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello, this is the base route!");
});
app.get("/waffles", function(req, res){
    res.send("This route serves the Waffles resource.");
});
app.get("/pancakes", function(req, res){
    res.send("This route serves the Pancakes resource.");
});
app.get("/french-toast", function(req, res){
    res.send("This route serves the French-Toast resource.");
});

app.listen(process.env.PORT || 3001);
module.exports = app;