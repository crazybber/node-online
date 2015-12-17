var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index'); // this is test route module ,will be removed in release version


var add = require('./routes/users/add'); // this is test route module ,will be removed in release version

var webpages = require('./routes/web');
var users = require('./routes/users/users');

var welcome = require('./routes/welcome');
var defaultpage = require('./routes/default');
var servicecenter = require('./routes/servicecenter');
var discover = require('./routes/discover');
var message = require('./routes/message');
var profile = require('./routes/profile');


app.use('/', routes); ////this is test modules
app.use('/add', add); //this is test modules

app.use('/users', users);
app.use('/webpages', webpages); //redirect logic to the register modules.

//main logic modules.
app.use('/welcome',welcome);
app.use('/default',defaultpage);
app.use('/servicecenter',servicecenter);
app.use('/discover',discover);
app.use('/message',servicecenter);
app.use('/profile',profile);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
