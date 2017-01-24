var fs = require('fs');
var path = require('path');

var AllFiles = [];
//var folderPath = process.argv[2];
//var extension = "."+ process.argv[3];
var dirSearch = function(dirName,extension,callback){
  fs.readdir(dirName,function callback(err,data){
    if(err){
      //console.log("Sorry ! Error Occured");
      return console.error(err);
    }
    else{
      var i=0;
      data.forEach(function(file){
        if(path.extname(file)=="."+extension){
          AllFiles[i]=file;
          i++;
          //console.log(file);
        }
      })
      return AllFiles;
    }
  });
};
// var dirSearch = function (dirName,extension,function callback(err,data){
//     fs.readdir(folder,function(err,data){
//       if(err){
//         //console.log("Sorry ! Error Occured");
//         return console.error(err)
//       }
//       else{
//         var i=0;
//         data.forEach(function(file){
//           if(path.extname(file)==extension){
//             AllFiles[i]=file;
//             i++;
//             //console.log(file);
//           }
//         })
//         return AllFiles;
//       }
//     });
// })
module.exports = dirSearch;
