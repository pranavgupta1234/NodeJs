var events = require('events');
var util = require('util');

//create a custom object
var Person = function(name){
  this.name = name;
}

//Inherit EventEmitter to person class so that it can also receice events
util.inherits(Person,events.EventEmitter);

//create 3 objects
var pranav = new Person('Pranav');
var tony = new Person('Tony');

var persons = [pranav,tony];

persons.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name+' said '+msg);
  });
});

setTimeout(function(){
  pranav.emit('speak','Hey buddies');
  tony.emit('speak','Hey I am tony');
},3000);
