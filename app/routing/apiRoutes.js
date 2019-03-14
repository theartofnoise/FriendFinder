

var friendsArr = require("../data/friends");


module.exports = function apiRoutes(app, fs) {
app.post("/api/friends",function(req, res) {
  // var fake = [5,1,4,3,5,1,2,5,4,1];
  // var newFriend = req.body;
  for (i=0;i<friendsArr.length;i++){
    console.log("length: "+friendsArr[i].scores);
  }
    var totDiff;
        var diffArry = [];
        var newFriend = req.body;

        for (var i = 0; i < friendsArr.length; i++) {
            totDiff = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                totDiff += Math.abs(friendsArr[i].scores[j] - newFriend.scores[j]);
            } //for j
            diffArry.push(totDiff);
        } //for i

        var match = diffArry.indexOf(Math.min(...diffArry));
    // function compare(fake, friendsArr[i].scores) {      
    // }
  // for (j=0;j<friendsArr[i].scores.length;j++){
  //   // friendsArr[i].scores
  // }
  console.log(newFriend);

  friendsArr.push(newFriend);
  
  res.json(friendsArr[match].name);
});
  

  app.get("/api/friends", function(req, res) {
  return res.json(JSON.stringify(friendsArr));
});


// app.get("/api/friends/:id", function(req, res) {
//   var chosen = req.params.id;

//   console.log(chosen);

//   friendsArr.find(function (friend){
//     if (chosen === friend.id) {
//        return res.json(friend);
//     }
//   })

  

//   return res.json(false);
  
// });
};
