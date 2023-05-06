const cors = require("cors"); //I added this at the top
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var apiRouter = require("./routes/api");

var app = express();
app.use(cors()); //I added this after app is created

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public'))); I commented this out

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', apiRouter);

module.exports = app;
