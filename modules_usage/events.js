// require events module fron node core library
var events = require('events');

//constructor for EventEmitter class in events module
var myEventEmitter = new events.EventEmitter();

//on firing of our customEvent the callback function will be fired with a message
myEventEmitter.on('customEvent',function(message){
  console.log(message);
});

//as we have defined in our eventemitter that on happening of our customEvent we will receive a custom message and here
//it is defined as second argument

//We call the emitter function after 3 sec
setTimeout(callThisAfter3sec,3000);

//This function emits the custom event
function callThisAfter3sec(){
  myEventEmitter.emit('customEvent',"Hii I am the message");
}
