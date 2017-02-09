var http = require('http');
var fs = require('fs');
var path = require('path');

var HOST = '127.0.0.1';
var PORT = 3000;
var _dirname = path.resolve();

var server = http.createServer(function(req,res){
  console.log('request was made on url '+req.url);

  if(req.url== '/home' || req.url == '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(_dirname + '/index.html').pipe(res);
  }
  else if(req.url == '/api'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('You have requested api which will be provided soon... :)');
  }
  else if(req.url == '/json'){
    var person = {
      name : 'Pranav',
      age : '20',
      sex : 'Male'
    };
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(person));
  }
  else {
    res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(_dirname+'/404.html').pipe(res);
  }
});

server.listen(PORT,HOST);
console.log('Server is now listening on port 3000');
