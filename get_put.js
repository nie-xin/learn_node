var users = {
	'nie': {
		name : 'xin',
		website : 'http://www.163.com'
	}
};

app.all('/user/:username', function(req, res, next) {
	if(users[req.params.username]) {
		next();
	} else {
		next(new Error(req.params.username + ' does not exist.'));
	}
});

app.get('/user/:username', function(req, res) {
	res.send(JSON.stringify(users[req.params.username]));
});

app.put('/user/:username', function(req, res) {
	res.send('Done');
});
