'use strict';
const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.static(__dirname + '/public'));

const server = app.listen(3000, () => {
	console.log('Listening on port 3000');
});

// Websocket setup
const io = require('socket.io').listen(server);
io.on('connection', socket => {
	console.log('socket connect');
	socket.on('disconnect', () => {
		console.log('socket disconnect');
	});
});
