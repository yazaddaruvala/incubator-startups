var app = require('./expressInit').init();

app.get('/', function(req, res){
	res.render('index', { 
		PageTitle: "Incubator Startups",
		incubatorName: "All",
		users: require('./ideallyDB').startupList()
	});
});

app.get('/about', function(req, res){
	res.render('about', {
		PageTitle: "About Startup List"
	});
});
