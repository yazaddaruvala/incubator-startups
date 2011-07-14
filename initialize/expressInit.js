exports.init = function(){
  var express = require('express'), app = express.createServer();
  app.configure(function(){
    app.set('views', __dirname + '/../resources/views');
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/../resources/static'));
    app.use(express.logger());
  });

  app.listen(8001);

  return app;
}
