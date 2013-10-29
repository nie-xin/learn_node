
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routers
app.get('/', routes.index);
app.get('/hello', routes.hello);
app.get('/user/:username', function(req, res) {
	res.send('user: ' + req.params.username);
});
app.get('/users', user.list);
// app.get('/list', function(req, res) {
// 	res.render('list', {
// 		title: 'List',
// 		items: [1983, 'niexin', 'express', 'Node.js']
// 	});
// });
// 
var util = require('util');

app.locals({
	inspect: function(obj) {
		return util.inspect(obj, true);
	}
});

app.dynamicHelpers({
	headers: function(req, res) {
		return req.headers;
	}
});

app.get('/helper', function(req, res) {
	res.render('helper', {
		title: 'Helpers'
	});
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
