var createError = require('http-errors');
let express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
var Promise = require('promise');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)


import Impl from "./impl";
let router = express.Router();
let impl = new Impl();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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

app.use(express.static(path.join(__dirname, 'front_end')));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
app.get('/', function (req: any, res: any, next: any) {
   res.render('index', { title: 'Express' });
});

// Random destination
app.get('/getRandomDestination/', (req: any, res: any, next: any) => {
   impl.selectRandomDest()
       .then((result) => {
           res.status(200).send(result);
       })
       .catch((err) => {
           res.status(400).send(err);
       });
});

// Random destination with given tag
app.get('/getDestinationWithTag/:name', (req: any, res: any, next: any) => {
   impl.selectRandomDestWithTag(req.params.name)
       .then((result) => {
           res.status(200).send(result);
       })
       .catch((err) => {
           res.status(400).send(err);
       });
});

// Final output
app.get('/output', (req: any, res: any, next: any) => {
   impl.getFinalOutput()
       .then((result) => {
           res.status(200).send(result);
       })
       .catch((err) => {
           res.status(400).send(err);
       });
});

module.exports = app;