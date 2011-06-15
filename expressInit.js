exports.init = function(){
	var express = require('express'), app = express.createServer();
	app.listen( process.env.PORT || 5000, function(){ console.log("Listening on port " + app.address().port); });
	//app.use(express.logger());
	app.configure(function(){
		app.set('views', __dirname + '/views');
		app.set('view engine', 'jade');
	});

	return app;
}
