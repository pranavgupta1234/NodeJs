var http = require('http');

var info= [];
var url = process.argv[2];

http.get(url, function callback(response){
  response.setEncoding('utf8');
  response.on('data',function(input){
    info.push(input);
  });
  response.on('error',console.error);
  response.on('end',function(){
    console.log(info.join("").length);
    console.log(info.join(""));
  });
});
