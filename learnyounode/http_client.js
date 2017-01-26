var http = require('http');
var options = {
  host: 'www.google.com',
  port: 80,
  path: '/index.html'
};

http.get(options, function(res) {
  res.setEncoding('utf8');
  console.log("Got response: " + res.statusCode);

  res.on("data", function(chunk) {
    console.log("BODY: " + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
/*
http.request docs contains example how to receive body of the response through handling data event:

var options = {
 host: 'www.google.com',
 port: 80,
 path: '/upload',
 method: 'POST'
};

var req = http.request(options, function(res) {
 console.log('STATUS: ' + res.statusCode);
 console.log('HEADERS: ' + JSON.stringify(res.headers));
 res.setEncoding('utf8');
 res.on('data', function (chunk) {
   console.log('BODY: ' + chunk);
 });
});

req.on('error', function(e) {
 console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();

http.get does the same thing as http.request except it calls req.end() automatically.

var options = {
 host: 'www.google.com',
 port: 80,
 path: '/index.html'
};

http.get(options, function(res) {
 console.log("Got response: " + res.statusCode);

 res.on("data", function(chunk) {
   console.log("BODY: " + chunk);
 });
}).on('error', function(e) {
 console.log("Got error: " + e.message);
});
*/
