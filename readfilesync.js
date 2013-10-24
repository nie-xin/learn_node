// readfilesync.js
// sync method, so the operations are excuted one by one
// and the I/O operations will block the process

var fs = require('fs');
var data = fs.readFileSync('file.text', 'utf-8');
console.log(data);
console.log('end.');
