var http = require('http');
var path = require('path');
var fs = require('fs');

var HOST = '127.0.0.1';
var server = http.createServer(function(req,res){
  console.log('request was made for'+ req.url);
  //this time we will send json data to browser
  res.writeHead(200,{'Content-Type':'application/json'});
  var person = {
    name : 'Pranav',
    job : 'Software Developer',
    age : 19
  };
  res.end(JSON.stringify(person));
})

server.listen(3000,HOST);
console.log('server is listening on port 3000');
