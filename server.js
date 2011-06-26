var app = require('./initialize/expressInit').init();
//var db = require('./initialize/dbInit');
var fs = require('fs'); var Data = require('data');
// App Config
global.config = JSON.parse(fs.readFileSync(__dirname+ '/config.json', 'utf-8'));
global.seed = JSON.parse(fs.readFileSync(__dirname+ '/db/schema.json', 'utf-8'));
  
app.get('/', function(req, res){
  var incubatorList = [{name: "All"}];
  var graph = new Data.Graph(seed).connect('couch', { url: config.couchdb_url });
  graph.fetch({type: '/type/incubator'}, function(err){
    if(err) { console.log(err); return; }
    graph.find({'type|=': ['/type/incubator']}).each(function(val, key, index) { 
      incubatorList.push({name: val.get('name')});
    });

    res.render('index', {
      PageTitle: "Incubator Startups",
      incubators: incubatorList
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

/*
everyone.on('connect', function(){
  this.now.getStartupList(db.getIncubatorList()[0].name);
});
*/

everyone.now.getStartupList = function(selectedStartup){
	if (selectedStartup == "Select one to view startups") return;
	var data = [
		{ name: selectedStartup }
	];
	this.now.updateStartupList(data);
}
