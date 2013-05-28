define([
	'underscore',
	'backbone.localStorage'
	],
function(_, Backbone) {
	'use strict';
	
	var store = new Backbone.LocalStorage(window.store || "SearchQueryCollection"); // for testing purposes

	var SearchQuery = Backbone.Model.extend({
		localStorage: store,
		defaults: {
			title: "",
			timestamp: 0,
			completed: false
		},
	    validate: function(attrs) {
			if ( _.isEmpty(attrs.title) ) {
				return "Missing Title";
			}
		}
	});
 
	return SearchQuery;
});