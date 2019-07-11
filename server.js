const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardRoutes = require('./routes');
<<<<<<< HEAD
const dotenv = require('dotenv');
=======
const dotenv = require('dotenv').load();
>>>>>>> 7a0b8ebc7579b0dd34b23250b6df9e23da5409e5

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
Promise = mongoose.Promise;



// connect to database (local or production)
// mongoose.set('useFindAndModify', false);
// mongoose.connect("mongodb://bruder44:AgentRooney10@ds261486.mlab.com:61486/mannavest", {useNewUrlParser: true}, err => {
mongoose.connect("mongodb://localhost:27017/mannavest", { useNewUrlParser: true }, err => {
    if (err) console.error(err);
    else console.log(`Database Connected!!!`);
});
// routes or import from route module

// connect to server (local or production)
app.listen(PORT, err => {
    if (err) console.error(err);
    else console.log(`Server listening on port ${PORT}`);
});