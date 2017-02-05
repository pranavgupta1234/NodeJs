var http = require('http');
var path = require('path');
var fs = require('fs');

var HOST = '127.0.0.1';
var _dirname = path.resolve();

//function is fired up each time request is made
var server  = http.createServer(function(req,res){
  console.log('request was made'+ req.url);
  res.writeHead(200,{'Content-Type':'text/html'});
  var readStream = fs.createReadStream(_dirname+'/index.html','utf8');
  //remember that res is a writable stream and req is a readable stream
  readStream.pipe(res);
});
server.listen(3010,HOST);
console.log('listening on port 3010');
