

var express = require('express'),
  config = require('./config/config');

var app = express();


var Person = function (name) {
    this._name = name;
};

Person.prototype.sayHello = function () {
    return 'My name is: ' + this._name;
};

app.get('/', function (req, res) {
  var fredy = new Person('Fredy Rincon');
  res.send('Hello ' + fredy.sayHello());
});


require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

