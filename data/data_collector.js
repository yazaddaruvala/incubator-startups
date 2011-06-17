var fs = require('fs'), https = require('https');
var spreadsheet = {
  host: 'https://spreadsheets.google.com',
  method: 'POST',
  path: '/ccc?key=0AkkhSN3vaY4jdF90b1l1Vnl5NmZjaTBNQWlJYVozMEE#gid=20'
};

https.request(spreadsheet, function(er, response){
  if (er) console.log(er);
  cosole.log("Got response: " + response.statusCode);
}).on('error', function(err){
  console.log("Got error: " + err.message);
});


// curl https://spreadsheets.google.com/ccc?key=0AkkhSN3vaY4jdF90b1l1Vnl5NmZjaTBNQWlJYVozMEE#gid=20

// https://spreadsheets.google.com/ccc?key=D0AkkhSN3vaY4jdF90b1l1Vnl5NmZjaTBNQWlJYVozMEE%26pref%3D2&amp;sa=p
