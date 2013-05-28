define([
	'underscore',
	'backbone.localStorage',
	'models/SearchQuery'
	],
function(_, Backbone, SearchQuery) {
	'use strict';
	
	var store = new Backbone.LocalStorage(window.store || "SearchQueryCollection"); // for testing purposes

	var SearchQueryCollection = Backbone.Collection.extend({
		localStorage: store,
	    model: SearchQuery,
	    
		completed: function() {
			return this.where({
				completed: true
			});
		},
		
		remaining: function() {
			return this.where({
				completed: false
			});
		},	
		
		comparator: function(model){
			return model.get('timestamp');
		}
	});
	
	return SearchQueryCollection;
});