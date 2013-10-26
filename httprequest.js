var http        = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	name: 'niexin',
	email: 'niexin.study@gmail.com',
	address: 'Wijing 2#, Pairs5',
});

var options = {
	host: 'www.google.com',
	path: '/application/node/post.php',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencode',
		'Content-Length': contents.length
	} 
};

var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
});

req.write(contents);
req.end();
