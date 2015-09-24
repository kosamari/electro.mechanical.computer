var express = require('express');
var app = express();
var port = 5060;
var ioport = 5065;
var io = require('socket.io').listen(ioport);
var bunyan = require('bunyan');
var log = bunyan.createLogger({
                name: 'punchdemo',
                streams: [
                    {
                        level: 'info',
                        path: './punchdemo.log'
                    }
                ]
            });
/*
express server
*/
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/textile', function (req, res) {
  res.render('textile',{port:ioport});
});
app.get('/ascii', function (req, res) {
  res.render('ascii',{port:ioport});
});
app.use(express.static(__dirname + '/public'));
app.listen(port);

/*
socket.io
*/
io.on('connection', function (socket) {

  socket.on('hold', function(pin) {
    socket.emit('hold', pin)
    socket.broadcast.emit('hold', pin);
  });

  socket.on('release', function(pin) {
    socket.emit('release', pin)
    socket.broadcast.emit('release', pin);
  });

  socket.on('draw', function(data) {
    log.info(data)
  });

  // on disconnect
  socket.on('disconnect', function() {
    socket.broadcast.emit('disconnected');
  });

});
