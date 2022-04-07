require('dotenv').config(); // Allows server to read from the .env file
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

require('./config/database');
require('./config/passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
// going to be sent back and forth on every http request response
// inside it we're going to end storing logged in users database id
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setting up our session cookie
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// SETUP passport after session
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
app.use('/dist/', express.static(path.join(__dirname, 'node_modules/lil-gui/dist')));


// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user; // res.locals will assign a variable to every single ejs view, create global varibales for views
   next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
