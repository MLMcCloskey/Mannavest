const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardRoutes = require('./routes');
<<<<<<< HEAD
require('dotenv').config();

=======
const dotenv = require('dotenv');
dotenv.config();
>>>>>>> 4ebabbc67c7118c09baa58d942cc80ea47526f3b

// port variable (local or production)
const PORT = process.env.PORT || 3001;

// const mongodb = process.env.MONGODB_URI;

// initialize express object
const app = express();

//CORS configuration 
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);

// passing in routes to express from routes module

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cardRoutes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    console.log("writing code sucks");
    app.use(express.static("client/build"));
  }

Promise = mongoose.Promise;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// connect to database (local or production)
// mongoose.set('useFindAndModify', false);
<<<<<<< HEAD
// mongoose.connect("mongodb://bruder44:AgentRooney10!@ds261486.mlab.com:61486/mannavest", {useNewUrlParser: true}, err => {
const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
// || "mongodb://localhost:27017/mannavest";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, err => {
if (err) console.error(err);
else console.log(`Database Connected!!!`);
=======
// mongoose.connect("mongodb://bruder44:AgentRooney10@ds261486.mlab.com:61486/mannavest", {useNewUrlParser: true}, err => {
const MONGODB_URI = 
   // process.env.MONGODB_URI || 
    "mongodb://localhost:27017/mannavest";
console.log("this the uri " + MONGODB_URI);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, err => {
    if (err) console.error(err);
    else console.log(`Database Connected!!!`);
>>>>>>> 4ebabbc67c7118c09baa58d942cc80ea47526f3b
});

// routes or import from route module

// connect to server (local or production)
app.listen(PORT, err => {
    if (err) console.error(err);
    else console.log(`Server listening on port ${PORT}`);
});