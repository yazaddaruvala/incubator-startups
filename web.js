var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
//	response.writeHead(200, {'Content-Type':'text/html'});
//	response.write('Love you M Peaseles! :)');
//	response.end();
	fs.readFile('index.html', function(err, data){
		response.writeHead(200, {'Content-Type':'text/html'});
		response.write(data);
		response.end();
	});
});

var port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log("Listening on " + port);
});
