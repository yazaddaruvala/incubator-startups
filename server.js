var  app = require('./initialize/expressInit').init();
var   db = require('./db/database');
var   fs = require('fs');
var Data = require('data');

  
app.get('/', function(req, res){
  db.getIncubatorList(function(incubatorList){
   // db.getStartupList(incubatorList[0].name, function(startupList){
      res.render('index', {
        PageTitle: "Incubator Startups"
,       incubators: incubatorList
//,       startups: startupList
,       startups: []
      });
   // });
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

	var startupList = [
		{ name: selectedStartup },
		{ name: 'Y' },
		{ name: 'Z' },
	];
	this.now.updateStartupList(startupList);
//  _function_caller = this;
//  db.getStartupList(selectedStartup, function(startupList){
//	_function_caller.now.updateStartupList(startupList);
//  });
}

