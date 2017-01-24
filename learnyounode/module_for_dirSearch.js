var fs = require('fs');
var path = require('path');
var AllFiles= [];
//var folderPath = process.argv[2];
//var extension = "."+ process.argv[3];
/* Firstly we just made a functional expression accepting three arguments (third one is the callback func implemeted by user and the
maker of module should call it as he has said in the api)
Now we have to internally use fs module and then use our callBack function get required data(end user doesn't mind this)
(it has to be implemented according to api of fs)
Now after formulating the data as we wanted we will invoke callBack function with proper parameters and result will be printed
and if any error occures during fs module we can simply invoke error to the user
Note that by convention err is always first argument to callbacks and calling the callback function with just err is no harm
*/
var dirSearch = function(dirName,extension,callback){
  fs.readdir(dirName,function callBack(err,data){
    if(err){
      //console.log("Sorry ! Error Occured");
      return callback(err);
    }
    else{
      var i=0;
      data.forEach(function(file){
        if(path.extname(file)=="."+extension){
          AllFiles[i]=file;
          i++;
          //console.log(file);
        }
      });
      callback(null,AllFiles);
    }
  });
};
module.exports = dirSearch;
