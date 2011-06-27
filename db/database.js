var Data = require('data')
,   fs = require('fs');

// App Config
global.config = JSON.parse(fs.readFileSync(__dirname+ '/config.json', 'utf-8'));
global.seed = JSON.parse(fs.readFileSync(__dirname+ '/schema.json', 'utf-8'));

exports.getIncubatorList = function(next){
  var incubatorList_temp = [{name: "All"}];
  var graph = new Data.Graph(seed).connect('couch', { url: config.couchdb_url });
  graph.fetch({type: '/type/incubator'}, function(err){
    if(err) { console.log(err); return; }
    graph.find({type: ['/type/incubator']}).each(function(val, key, index) { 
      incubatorList_temp.push({name: val.get('name')});
    });
    console.log(incubatorList_temp);
    next(incubatorList_temp);
  });
}

exports.getStartupList = function(incubatorName, next){
  var startupList_temp = [];
  var graph = new Data.Graph(seed).connect('couch', { url: config.couchdb_url });
  console.log(incubatorName);
  graph.fetch({type: '/type/startup'}, function(err){
    if (err) { console.log(err); return; }
    console.log(graph.get('/startup/famigo'));
/*    if (incubatorName == 'All') {
      graph.find({type: ['/type/startup']}).each(function(val, key, index) {
        startupList_temp.push({name: val.get('name')});
        console.log(startupList_temp);
        //next(startupList_temp);

      });
    } else {
      graph.find({type: '/type/startup', incubator: incubatorName}).each(function(val, key, index) {
        startupList_temp.push({name: val.get('name')});
        console.log(startupList_temp);
        //next(startupList_temp);
      });
    }
*/  });
}
