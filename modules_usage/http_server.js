var http = require('http');
var HOST = '127.0.0.1';

var server = http.createServer(function(req,res){
  console.log('request was made on url '+ req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Yess you visited this page');
});
server.listen(3010,HOST);
console.log('Server is listening on port 3010');
