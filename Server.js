var express = require("express");
var path = require("path");
var fs = require('fs');

var friendsArr = require("./app/data/friends");
var app = express();
var PORT = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(function(req,res,next)
{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
 next();
});

//gets the routes and sends express with it (app)
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

 