//var url = require('url');
var fs = require('fs');
var app = require('express').createServer(), serverPort = process.env.PORT || 3000;

app.get("/", function(request, response){
	//var pathname = url.parse(request.url).pathname;
	//if (pathname == "/") pathname = "index";
	//console.log("Request for " + pathname + " recieved.");
	fs.readFile("index.html", function(err, data){
		response.send(data, {'Content-Type':'text/html'}, 200);
	});
});
app.listen(serverPort, function(){
	console.log("Listening on port " + serverPort);
});
