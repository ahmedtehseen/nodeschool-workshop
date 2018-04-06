// require installed packages
const mongoose = require('mongoose');
const express = require('express');
const mongoUrl= 'mongodb://localhost/test';
const port='3000';

// establish db connection
mongoose.connect(mongoUrl);

//connection instance
const dbConnection = mongoose.connection;

// bind events on connection's instance
dbConnection.on('error', function(){
console.log('Could not connect to mongodb');
});
dbConnection.once('open', function() {
  console.log('connected to mongodb');
});

// initiate express
const app = express();

// start a server on port 3000
app.listen(port,function(){
    console.log('server up and running at port '+port);
})