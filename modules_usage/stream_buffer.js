var http = require('http');
var fs = require('fs');
var path= require('path');
var _dirname = path.resolve();

//Also this is different from readFile because that reads all the data at one go
//create read stream inherits from eventemitter and emits data events
var readStream = fs.createReadStream( _dirname +'/chunk.txt','utf8');
//create a write stream
var writeStream = fs.createWriteStream(_dirname + '/WriteChunk.txt');

readStream.on('data',function(chunk){
  console.log('new chunk received');
  console.log(chunk);
  writeStream.write(chunk);
});
