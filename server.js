var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

// Route all requests to the angular application root at ./app
app.use(express.static(path.join(__dirname, 'app')));

// Connection halding middleware
io.on('connection', function(socket) {
    console.log(socket);
    console.log(`a new client has connected with socket ID '${socket.id}'`);

    socket.on('disconnect', function() {
        console.log(`client disconnected`);
    });
});

// Listen on server port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});