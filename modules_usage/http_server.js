var http = require('http');
var HOST = '127.0.0.1';

var server = http.createServer(function(req,res){
  console.log('request was made on url '+ req.url);
  //every request and response contains some headers and in this case this header will tell browser that this is a
  //simple plain text
  res.writeHead(200,{'Content-Type':'text/plain'});
  //this data will be passed
  res.end('Yess you visited this page');
});
server.listen(3010,HOST);
console.log('Server is listening on port 3010');

//always claose with Ctrl + C (It kills)
//not with Ctrl+Z (it suspends)
