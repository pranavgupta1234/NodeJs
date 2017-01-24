var fs = require('fs');
var dataToRead = fs.readFile(process.argv[2],function Mycallback(err,data){
  if(err!=null){
    console.log('Sorry! Error Occured');
  }
  else{
    var fileData = data.toString().split('\n');
    console.log(fileData.length-1);
  }
});
