const express = require('express');
const router = express.Router();
const Poll = require('../models');
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

  Poll.create({
  user: id[1],
  title: req.body.poll.title,
  options: req.body.poll.options,
  }, function(err, poll){
      if (err) console.log(err)
    });

  res.send("done");
});


// displing pools of one of users
router.get('/userPolls', authCheck, function(req, res){
  let id = req.user.sub;
  id = id.split("|");

  Poll.find({user: id[1]}, function(err, polls){
    if (err) console.log(err)

    res.send(polls);
  });


});



router.get('/allPolls', function(req, res){


  Poll.find({}, function(err, polls){
    if(err) console.log(err);

    res.send(polls);

 });
});

router.post('/vote', function(req, res){

  var title = req.body.poll.title;
  var id = req.body.poll._id

  Poll.findByIdAndUpdate(id, {$set: {options: req.body.poll.options}}, function(err,res){
    if (err) console.log(err)
  });

});


router.post('/remove', function(req, res){
  var id = req.body.poll._id
  Poll.findOneAndRemove({_id: id}, function(err,res){

  })
  res.send("done")
})

router.post('/thisPoll', function (req,res){

  Poll.findOne({_id: req.body.id}, function(err, poll){
    if (err) console.log(err)

    res.send(poll)
  })
});

router.post('/removeOption', authCheck, function (req, res){
  let polId = req.body.poll._id;
  let user = req.user.sub;
  user = user.split("|");

  Poll.findOne({_id: polId}, "user", function(err, us){
    if(us.user == user[1]){
      return res.send("show")
    }
    else{
      return res.send("wrong user")
    }
  })
})

module.exports = router;
