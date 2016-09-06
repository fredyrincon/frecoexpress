

var express = require('express'),
  config = require('./config/config');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

