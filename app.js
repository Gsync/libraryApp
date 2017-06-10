var express = require("express");

var app = express();
var PORT = 5000;

app.get("/", function (req, res) {
  res.send("Helllo world");
});

app.get("/books", function (req, res) {
  res.send("Helllo books");
});

app.listen(PORT, function(err) {
  console.log("Running server on port: " + PORT);
});