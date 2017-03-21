const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const Poll = require('./models');
require('dotenv').config();
const findOrCreate = require('mongoose-findorcreate');



const port = process.env.PORT || 8080;

var connect = process.env.MONGO_URI || "mongodb://localhost:27017/voting_app"
mongoose.connect(connect);
mongoose.connection.on("connected", function (){
  console.log("Connected to db")
});




const app = express();

//enable connection from diffrent domain, for front end angular2
app.use(cors());

//set static folder for anfular2 files
app.use(express.static(path.join(__dirname, 'public')));

//add middleware bodyparser
app.use(bodyParser.json());




//setting the routes
const api = require('./routes/api')
app.use('/api', api);


//start server
app.listen(port, function(){
  console.log("connected to server on port " + port);
});
