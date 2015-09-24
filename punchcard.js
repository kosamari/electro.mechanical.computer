var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var socket = require('socket.io-client')('http://electro.mechanical.computer:5040');

  var b1 = new five.Button(2);
  var b2 = new five.Button(3);
  var b3 = new five.Button(4);
  var b4 = new five.Button(5);
  var b5 = new five.Button(6);
  var b6 =  new five.Button(7);
  var b7 = new five.Button(8);
  var b8  = new five.Button(9);

  b1.on('hold', function() {
    console.log( '1 Button held' );
    socket.emit('hold', {pin:0});
  });
  b1.on('release', function() {
    console.log( '1 Button released' );
    socket.emit('release', {pin:0});
  });

  b2.on('hold', function() {
    console.log( '2 Button held' );
    socket.emit('hold', {pin:1});

  });
  b2.on('release', function() {
    console.log( '2 Button released' );
    socket.emit('release', {pin:1});
  });

  b3.on('hold', function() {
    console.log( '3 Button held' );
    socket.emit('hold', {pin:2});

  });
  b3.on('release', function() {
    console.log( '3 Button released' );
    socket.emit('release', {pin:2});
  });

  b4.on('hold', function() {
    console.log( '4 Button held' );
    socket.emit('hold', {pin:3});
  });
  b4.on('release', function() {
    console.log( '4 Button released' );
    socket.emit('release', {pin:3});
  });

  b5.on('hold', function() {
    console.log( '5 Button held' );
    socket.emit('hold', {pin:4});
  });
  b5.on('release', function() {
    console.log( '5 Button released' );
    socket.emit('release', {pin:4});
  });

  b6.on('hold', function() {
    console.log( '6 Button held' );
    socket.emit('hold', {pin:5});
  });
  b6.on('release', function() {
    console.log( '6 Button released' );
    socket.emit('release', {pin:5});
  });

  b7.on('hold', function() {
    console.log( '7 Button held' );
    socket.emit('hold', {pin:6});
  });
  b7.on('release', function() {
    console.log( '7 Button released' );
    socket.emit('release', {pin:6});
  });

  b8.on('hold', function() {
    console.log( '8 Button held' );
    socket.emit('hold', {pin:7});
  });
  b8.on('release', function() {
    console.log( '8 Button released' );
    socket.emit('release', {pin:7});
  });

  //socket IO setting
  socket.on('connect', function(){
    console.log('Socket Connected');
  });

  socket.on('disconnect', function(){
    console.log('Socket Disconnected !');
  });

  this.repl.inject({
    socket: socket
  });

});