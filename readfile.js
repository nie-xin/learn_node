// readfile.js
// A exemple of asyn I/O 
// When a thread requires a I/O operation, it will not wait for the terminus
// so the 'end.' print out first and then result of reading file
// 
 
var fs = require('fs');
fs.readFile('file.text', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
console.log('end.');
