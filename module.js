var http = require('http');
var attachment = require('./node');

http.createServer(function(request, response){
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(attachment.meanness[Math.floor(Math.random()*attachment.meanness.length)]);
  response.end();
}).listen(8888);
