
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	fs = require("fs"),
	$ = require("jquery");

var app = express();

var port = process.env.PORT || 3000;

var search = function (req, res) {
	"use strict";
	
	var resultObj = {
		result: "Some YouTube Title from the server"
	};

    res.send(resultObj);
};

app.configure(function() {
	"use strict";
	
	app.set('port', port);
	app.use(app.router);	
	app.use(express.static(__dirname + '/..'));
	app.get('/search', search);
	app.post('/search', search);
	
	console.log (__dirname);
});


http.createServer(app).listen(app.get('port'), function(){
	"use strict";
	console.log('Express server listening on port ' + app.get('port'));
});
