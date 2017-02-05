var http = require('http');
var path = require('path');
var fs = require('fs');

var _dirname = path.resolve();

var readStream = fs.createReadStream(_dirname+'/chunk.txt','utf8');
var writeStream = fs.createWriteStream(_dirname+ '/WriteChunk.txt');

//Instead of receiving data chunk by chunk and listening to that individually we can just pipe it from read stream to
//write stream and remember that we can only pipe from a read stream
readStream.pipe(writeStream);
