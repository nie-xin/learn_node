var events = require('events');

var emitter = new events.EventEmitter();

// listener 1
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});
// listener 2
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'niexin', 1983);
