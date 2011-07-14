var  app = require('./initialize/expressInit').init();
var   db = require('./db/database');
var   fs = require('fs');
var Data = require('data');

  
app.get('/', function(req, res){
  db.getIncubatorList(function(incubatorList){
      res.render('index', {
        PageTitle: "Incubator Startups"
,       incubators: incubatorList
,       startups: []
      });
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    PageTitle: "About Startup List"
  });
});

var nowjs = require('now');
var everyone = nowjs.initialize(app);

everyone.now.getStartupList = function(selectedStartup){
  _function_caller = this;
  db.getStartupList(selectedStartup, function(startup){
	_function_caller.now.appendStartup(startup);
  });
}

