var express = require('express'), app = express.createServer(), serverPort = process.env.PORT || 5000;
//app.use(express.logger());
app.listen(serverPort, function(){
	console.log("Listening on port " + serverPort);
});

//, incubatorName: "Y-Combinator"
var db_names = [
	{name: "nowjs", crunchbaseURL: "NULL", websiteURL: "http://www.nowjs.com/"},
	{name: "heroku", crunchbaseURL: "http://www.crunchbase.com/company/heroku", websiteURL: "http://www.heroku.com/"},
	{name: "embedly", crunchbaseURL: "http://www.crunchbase.com/company/embed-ly", websiteURL: "http://www.embed.ly"}
]

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
});

app.get('/', function(req, res){
	res.render('index', { PageTitle: "Incubator Startups", incubatorName: "All", users: db_names } );
});

app.get('/About', function(req, res){
	res.render('About', { PageTitle: "About"});
});














/*var jade = require("jade");
var fs = require('fs'), path = require('path');

displayPage = function(pageName, request, response){
	var pageName = path.join(process.cwd(), pageName + ".html");
	path.exists(pageName, function(exists){
		if (!exists){
			response.send("Sorry page no longer exists" + "\n", {"Content-Type": "text/plain"}, 200);
			return;
		}
		fs.readFile(pageName, function(err, data){
			if(err) {
				response.send(err + "\n", {"Content-Type": "text/plain"}, 500);
				return;
			}  
			response.send(data, {'Content-Type':'text/html'}, 200);
		});
	});
}

app.get("/", function(request, response){
	var local_var = "I am a local var";
	jade.renderFile("views/index.jade", {locals:{local_var:local_var}}, function(err, html){
		response.send(html);
	});
	//displayPage("index", request, response);
});

app.get("/About", function(request, response){
	displayPage("About", request, response);
});

app.get("*", function(request, response){
	response.send(404);
});
*/
