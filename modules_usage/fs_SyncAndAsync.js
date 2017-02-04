var fs = require('fs');
//this is synchronous code and hence blocking so any code after it will be executed only after execution of this
var data = fs.readFileSync('readMe.txt','utf8');
console.log(data);
console.log('Yeah Synchronous');

fs.writeFileSync('writeMe.txt',data);

console.log('Data Written');

//Now Async
//3rd argument is a callback function fired when job is done
var data = fs.readFile('readMe.txt','utf8',function(err,data){
   console.log(data);
});
console.log('Yeah Asynchronous');

fs.writeFile('writeMe.txt',data);

console.log('Data Written');
