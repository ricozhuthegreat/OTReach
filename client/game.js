
// Initialize a new socket
let socket = io();

socket.on('message', function(data) {
  console.log(data);
});

