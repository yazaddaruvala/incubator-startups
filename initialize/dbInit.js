var Data = require('data'), fs = require('fs');

// App Config
var config = JSON.parse(fs.readFileSync(__dirname+ '/../config.json', 'utf-8'));
var seed = JSON.parse(fs.readFileSync(__dirname+ '/../db/schema.json', 'utf-8'));

var graph = new Data.Graph(seed);
graph.connect('couch', {
  url: config.couchdb_url
//  filters: [
//    Filters.ensureAuthorized(),
//    Filters.logEvents()
//  ]
});

exports.getIncubatorList = function(){
  temp = [{name: "All"}];
  graph.find({'type':['/type/incubator']}).each(function(val, key, index) { 
    temp.push({name: val.get('name')});
  });
  console.log(temp);
  return temp;
}
