var dirSearch =  require('./module_for_dirSearch');

/* Here we are just calling the function from module which we just required
Note that the callback function defined here by us is passed to the function in the module and it will be called with
the arguments as defined in the api provided by whose module you are using(you need to give it that way)
He can simply call this callback function as callback(null,DataHeComputed);
so the data computed by hin is implemented by you as below
*/
dirSearch(process.argv[2],process.argv[3],function callback(err,data){
  if(err){
    console.log("Error!!!");
  }
  else{
    for(var i=0;i<data.length;i++){
      console.log(data[i]);
    }
  }
});
