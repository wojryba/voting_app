const express = require('express');
const router = express.Router();
const User = require('../models');

const jwt = require('express-jwt');

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
var authCheck = jwt({
  secret: process.env.SECRET
});

/// route for seving new pools to user
router.post('/new', authCheck, function(req, res){

  let options = req.body.poll.options;
  for(let option of options){
    option.votes = 0;
  }
  let id = req.user.sub;
  id = id.split("|");


  if(id[0]=="facebook"){
    User.findOrCreate({facebook: id[1]}, function(err, us){
      if (err) console.log(err)

      us.pools.push(req.body.poll);

      us.save();
    })
  }
  if(id[0]=="google-oauth2"){
    User.findOrCreate({google: id[1]}, function(err, us){
      if (err) console.log(err)

      us.pools.push(req.body.poll);

      us.save();
    })
  }
  if(id[0]=="twitter"){
    User.findOrCreate({twitter: id[1]}, function(err, us){
      if (err) console.log(err)

      us.pools.push(req.body.poll);

      us.save();
    })
  }

  res.send(req.user);
});


// displing pools of one of users
router.get('/userPolls', authCheck, function(req, res){
  let id = req.user.sub;
  id = id.split("|");
console.log(req.user)
  if(id[0]=="facebook"){
    User.findOne({facebook: id[1]}, "pools", function(err, polls){

      return res.send(polls.pools);
    });

  }

  if(id[0]=="google-oauth2"){
    User.findOne({google: id[1]}, "pools", function(err, polls){

      return res.send(polls.pools);
    });
  }

  if(id[0]=="twitter"){
    User.findOne({twitter: id[1]}, "pools", function(err, polls){

      return res.send(polls.pools);
    });
  }

});



router.get('/allPolls', function(req, res){


  User.find({}, function(err, users){
    if(err) console.log(err);

    var polls = [];
    console.log(users)


   users.forEach(function(user) {
     polls.push(user.pools);
   });

   var pol;
  function aFilter(value) {
    if( Object.prototype.toString.call( value ) === '[object Array]' ) {
    pol = value
}
     return typeof(value) == 'array';
   }
   polls = polls.filter(aFilter)
   res.send(pol);

 });
});

router.post('/vote', function(req, res){

  var title = req.body.poll.title;


  /*User.findOne({}, function(err, polls){
    console.log(polls)
  });

  */

});


module.exports = router;
