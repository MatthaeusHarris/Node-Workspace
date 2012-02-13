var io = require("socket.io").listen(8888);

io.sockets.on('connection', function(socket) {
	console.log("Connection detected.");
	socket.emit('news',{hello:'world'});
	socket.on('my other event',function(data) {
		console.log(data);
	});
});