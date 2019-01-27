var createError = require('http-errors');
let express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
var Promise = require('promise');

let router = express.Router();

var picatalasRouter = require('./src/PicatlasRouter');

var app = express();

var cors = require('cors');
var corsOptions = {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
};

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(express.static('front_end'));


app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', picatalasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/* GET home page. */
// app.get('/', function (req: any, res: any, next: any) {
//    res.render('index', { title: 'Express' });
// });


module.exports = app;