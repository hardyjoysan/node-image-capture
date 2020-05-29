var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv =  require('dotenv');

var imageRouter = require('./routes/image');

var app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());


dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// URL Routes
app.use('/image', imageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: '404! Not Found!' });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send({ error: 'Oops! Something went wrong!' });

});

module.exports = app;
