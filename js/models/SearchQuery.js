define([
	'underscore',
	'backbone'
	],
function(_, Backbone) {
	'use strict';
	
	var SearchQuery = Backbone.Model.extend({
	
		url: '/search',
  
		defaults: {
			query: "default query",
			result: "default result",
			timestamp: 0,
			completed: false
		}
	});
	
	return SearchQuery;
});