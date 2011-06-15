var app = require('./expressInit').init();

var nowjs = require('now');
var everyone = nowjs.initialize(app);

app.get('/', function(req, res){
	res.render('index', { 
		PageTitle: "Incubator Startups",
		incubators: [{name: "None"}, {name: "All"}, {name: "YCombinator"}],
		startups: require('./ideallyDB').startupList()
	});
//	setTimeout(function(){
//		everyone.now.callbk([{name: "hello"}]);
//	}, 2000);
});

app.get('/about', function(req, res){
	res.render('about', {
		PageTitle: "About Startup List"
	});
});

everyone.now.getStartupList = function(selectedStartup){
	var data = [{name: selectedStartup}];
	this.now.updateStartupList(data);
	//console.log(selectedStartup);
}
