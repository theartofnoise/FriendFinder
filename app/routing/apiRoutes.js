// var express = require("express");
// var path = require("path");

var friendsArr = require("../data/friends");
// var app = express();
// var PORT = process.env.PORT||3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'))
// app.use(function(req,res,next)
// {
//  res.header("Access-Control-Allow-Origin","*");
//  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//  next();
// });

module.exports = function apiRoutes(app) {
app.post("/api/friends",function(req, res) {
  var newFriend = req.body;
  friendsArr.push(newFriend);
  console.log("you work...");
});
  

  app.get("/api/friends", function(req, res) {
  return res.json(friendsArr);
});


app.get("/api/friends/:id", function(req, res) {
  var chosen = req.params.id;

  console.log(chosen);

  friendsArr.find(function (friend){
    if (chosen === friend.id) {
       return res.json(friend);
    }
  })

  // for (var i = 0; i < friendsArr.length; i++) {
  //   if (chosen === friendsArr[i].id) {
  //     return res.json(friendsArr[i]);
  //   }
  // }

  return res.json(false);
  
});
};
