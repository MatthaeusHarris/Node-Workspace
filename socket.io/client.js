var socket = require("socket.io");
console.log(socket.Socket())
socket.Socket().connect('http://localhost:8888');
socket.on('news', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});