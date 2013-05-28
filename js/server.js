
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

app.configure(function() {
	"use strict";
	
	app.set('port', port);
	app.use(app.router);	
	app.use(express.static(__dirname + '/..'));
	console.log (__dirname);
});


var User = function(config) {
	"use strict";
	
	this.defaults = {
	    firstname: 'firstname',
	    lastname: 'lastname',
	    age: 0
	};
	
	if (typeof config == 'object') {
		this.defaults = $.extend (this.defaults, config);
	}
};



var listUsers = function (req, res) {
	"use strict";
	
    var users = [];
    var config = {
		firstname: 'Rob',
		lastname: "O'Doherty",
		age: 40
    };

    var user = new User(config);
    
	users.push({id: 1, firstname: user.firstname, lastname: user.lastname, age: user.age});
    res.send(users);
};

app.get('/users', listUsers);

http.createServer(app).listen(app.get('port'), function(){
	"use strict";
	console.log('Express server listening on port ' + app.get('port'));
});
