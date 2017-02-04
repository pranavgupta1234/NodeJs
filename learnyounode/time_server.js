
/* this example shows how to write a TCP server in NodeJS. The below code creates a TCP server to which clients can attach
and communication can be done through sockets.
we can also the function inside create server is fired each time a connection is made (eg telnet 127.0.0.1 3445) initiates a
connection to localhost at port number 3445 and after telnet client will receive the present time printedon the console.
Also the data sent by client to server can also be logged on receiving data.
*/
var net = require('net');

var PORT = process.argv[2];
var HOST = '127.0.0.1';

var server =  net.createServer(function (socket){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDay();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      if(month<10){
        month= '0'+month;
      }
      var time_details = year+'-'+month+'-'+'0'+day+' '+hours+':'+minutes;
      console.log(time_details);
      socket.write(time_details);
  socket.on('data',function(data){
  });
  // Add a 'close' event handler to this instance of socket
  socket.on('close', function(data) {
      console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
  });
  socket.on('error',function(error){
      console.log(error.message);
  })
});
server.listen(PORT,HOST);

/*
var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6921;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    var date = new Date();
    console.log(date.getDay());

    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {

        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said "' + data + '"');

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
*/
