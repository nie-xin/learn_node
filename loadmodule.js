//loadmodule.js
var hello1 = require('./module');
hello1.setName('ByVoid');

var hello2 = require('./module');
hello2.setName('ByVoid 2');

hello1.sayHello();
