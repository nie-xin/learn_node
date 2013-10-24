// event.js
// a demonstration about EventEmitter object who provide event in node

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {
	console.log('some_event occured.');
});

setTimeout(function() {
	event.emit('some_event');
}, 5000);
