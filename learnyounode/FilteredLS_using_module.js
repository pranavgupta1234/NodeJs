var filteredList =  require('./module_for_dirSearch');

console.log(filteredList(process.argv[2],process.argv[3],function callback(err,data){
  if(err){
    console.log("Error!!!");
  }
  else{
    for(var i=0;i<data.length;i++){
      console.log(data[i]);
    }
  }
}));
