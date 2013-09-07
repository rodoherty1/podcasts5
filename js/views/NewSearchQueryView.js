define([
	'backbone',
	'models/SearchQuery',
	'models/SearchQueryCollection'
	],
function(Backbone, SearchQuery, SearchQueryCollection) {
	'use strict';
	
	var template = '<input id="searchQueryInputId" type="text" placeholder="Enter a YouTube title">';

	var View = Backbone.View.extend({
		tagName: 'form',
		className: 'newTask',
		
		render: function() {
			this.$el.html(template);
			this.$input = this.$("input");
			return this;
		},
		
		events: {
			'submit': function(e) {
				e.preventDefault();
				
				this.collection.create({
					query: this.$input.val().trim(),
					timestamp: new Date().getTime()
				});
				
				this.$input.val("");
			}
		}
	});
	
	return View;
});