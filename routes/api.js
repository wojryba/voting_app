const express = require('express');
const router = express.Router();
const auth = require('connect-ensure-login');
const User = require('../models');

router.get('/new', auth.ensureLoggedIn(), function(req, res){
  var id = req.user._id;
  console.log(id)
  var trk =  {
           "op1": "dssss",
           "op2": "dddd"
         };

  User.update({twitterId: req.user.twitterId}, { $push: { pools:  { trk } }}, { new: true }, function(err, k){
    if(err) console.log(err);

    console.log(k);
  });

  User.findOne({twitterId: req.user.twitterId}, "twitterId, polls", function(err, user){
    if(err) console.log(err);

    console.log(user);
  })

  res.send(req.user);
});

router.get('/userPolls', auth.ensureLoggedIn(), function(req, res){
  res.send(req.user.pools)
});

router.get('/allPolls', function(req, res){
  User.find({}, function(err, users){
    if(err) console.log(err);

    var polls = [];

   users.forEach(function(user) {
     polls.push(user.pools);
   });

   res.send(polls);
 });
});




module.exports = router;
