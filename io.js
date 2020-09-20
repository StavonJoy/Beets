var io = require('socket.io')();

// List for new conections from clients(socket)
io.on('connection', function (socket) {
  console.log("Client connected to socket.io!");
    // This is where all of our server-side socket.io functionality will exist.  

    // When anyone 'enters the room (loads the page)', add them to the list and play a sound

    // When anyone 'leaves the room (navigates away from the page)', remove them from the list and play a sound

    // When anyone sends a message, send the message to all of the connected clients and play a sound

    // When anyone presses a key while ty
});

// io represents socket.io on the server
module.exports = io;