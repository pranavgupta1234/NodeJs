var fs = require('fs');
//Buffer buff = new Buffer();
var str  =  fs.readFileSync(process.argv[2]).toString();

//console.log(str);
var newLine = str.split('\n');
console.log(newLine.length-1);
