const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const expressSessions = require('express-sessions');
const User = require('./models');
const auth = require('connect-ensure-login');
const findOrCreate = require('mongoose-findorcreate');
require('dotenv').config();


const port = process.env.PORT || 3000;

var connect = process.env.MONGO_URI || "mongodb://localhost:27017/voting_app"
mongoose.connect(connect);
mongoose.connection.on("connected", function (){
  console.log("Connected to db")
});

//setting up password auth
passport.use(new Strategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: '/login/twitter/return'
  },
  function(token, tokenSecret, profile, cb) {

    User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});





const app = express();

//enable connection from diffrent domain, for front end angular2
app.use(cors());

//set static folder for anfular2 files
app.use(express.static(path.join(__dirname, 'public')));

//add middleware bodyparser
app.use(bodyParser.json());

//passport middleware staff that I do not understand...
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


app.use(passport.initialize());
app.use(passport.session());


//loggging staff that works somehow
app.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/login', function(req, res){
  res.send("plese go to login/twitter to log in with twitter")
});

app.get('/login/twitter', passport.authenticate('twitter'));





//setting the routes
const api = require('./routes/api')
app.use('/api', api);

app.get('/', function(req, res){

  
  res.send(req.user);
});

//start server
app.listen(port, function(){
  console.log("connected to server on port " + port);
});
