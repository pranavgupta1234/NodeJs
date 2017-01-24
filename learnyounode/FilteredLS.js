var fs = require('fs');
var path = require('path');
var fileDir = fs.readdir(process.argv[2], function callback(err,data){
  if(err){
    console.log('Sorry ! Error reading file directory!');
  }
  else{
    var fileDirArray = data.toString().split(",");
    //console.log(fileDirArray);
    for(var i=0;i<fileDirArray.length;i++){
      var ext = path.extname(fileDirArray[i]);
      if(ext == "."+process.argv[3]){
        console.log(fileDirArray[i]);
      }
    }
  }
});
