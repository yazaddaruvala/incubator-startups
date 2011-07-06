var Data = require('data')
,   fs = require('fs');

// App Config
global.config = JSON.parse(fs.readFileSync(__dirname+ '/config.json', 'utf-8'));
global.seed = JSON.parse(fs.readFileSync(__dirname+ '/schema.json', 'utf-8'));

exports.getIncubatorList = function(next){
  var incubatorList_temp = [{name: "All"}];
  var graph = new Data.Graph(seed, false).connect('couch', { url: config.couchdb_url });
  graph.fetch({'type': '/type/incubator'}, function(err, nodes){
    if(err) { console.log(err); return; }
    nodes.each(function(val, key, index) { 
      incubatorList_temp.push({name: val.get('name')});
    });
    next(incubatorList_temp);
  });
}

exports.getStartupList = function(incubatorName, next){
  //var startupList_temp = [];
  var graph = new Data.Graph(seed).connect('couch', { url: config.couchdb_url });
  console.log(incubatorName+":\n");
  if (incubatorName == 'All') {
    graph.fetch({'type': '/type/startup'}, function(err, nodes){
      if (err) { console.log(err); return; }
      nodes.each(function(val, key, index) {
        //startupList_temp.push({name: val.get('name')});
        next(val);

      });
    });
  } else {
    graph.fetch({type: '/type/startup', 'incubator': "/incubator/" + incubatorName.toLowerCase()}, function(err, nodes){
      if (err) { console.log(err); return; }
      nodes.each(function(val, key, index) {
        //startupList_temp.push({name: val.get('name')});
        next(val);
      });
    });
  }
}
