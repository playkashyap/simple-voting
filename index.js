const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", function(req, res){
    res.render("home");
  });
app.get("/polling", function(req, res){
    res.render("polling");
  });
  

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });