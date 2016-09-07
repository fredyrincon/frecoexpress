

var express = require('express'),
  config = require('./config/config');

var app = express();


var Person = function (pName, pJob, pCompany) {
    this.name = pName;
    this.job= pJob;
    this.company = pCompany;
};

Person.prototype.sayHello = function () {
    return 'My name is: ' + this.name;
};

var Reminder = function (pId) {
    this.reminderId = 'This is the id of reminder ' + pId;
};

var Repository = function (pName, pOpenIssues, pWatchers) {
    this.name = pName;
    this.openIssues= pOpenIssues;
    this.watchers = pWatchers;
};


app.get('/', function (req, res) {
  var fredy = new Person('Fredy Rincon', 'Mobile Developer', 'HCX');
  //res.send('Hello ' + fredy.sayHello());
  //res.send(JSON.stringify({ a: 1 }));
  res.send(JSON.stringify(fredy));
});

app.get('/reminder/:id', function (req, res, next) {
  /*Todo.findById(req.params.id, function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });*/
  var each = new Reminder(req.params.id);
  res.json(each);
});

app.get('/users/fredyrincon/repos', function (req, res, next) {
  var myArray = new Array();
  myArray.push(new Repository("repo1","repo1","repo1"));
  myArray.push(new Repository("repo2","repo2","repo2"));
  res.json(myArray);
});


require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

