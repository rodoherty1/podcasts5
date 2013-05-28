require.config({
	baseUrl: "./js/",
	paths: {
		jquery: '../bower_components/jquery/jquery',
		underscore: '../bower_components/underscore-amd/underscore',
		backbone: '../bower_components/backbone-amd/backbone',
		'backbone.localStorage': 'lib/backbone.localStorage'
	},
	shim: {
		'backbone.localStorage': {
			deps: ['backbone'],
			exports: 'Backbone'
	    }
	}
});

require([
    'jquery',
    'backbone',
    'models/SearchQueryCollection',
    'views/MasterView'
	],
function($, Backbone, SearchQueryCollection, MasterView ) {
	'use strict';

	var template = function (id) {
		return $('#' + id).html();
	};

	var Router = Backbone.Router.extend({
		routes: {
			"": "main"
		},

		main: function() {
			var searchQueryCollection = new SearchQueryCollection();
			
			var view = new MasterView({
				collection: searchQueryCollection
			});
			
			searchQueryCollection.fetch({
				success: function(tasks) {
					$("#container").html(view.render().el).show();
				},
				
				error: function(model, error) {
					alert(error);
				}
			});
		}
	});

	// Preload CSS Sprite
	$('<img/>').attr('src', "./css/glyphicons.png");

	var router = new Router();
	Backbone.history.start();
});
