define([
	'backbone',
	'models/SearchQuery',
	'views/ViewSearchQueryView'
	],
function(Backbone, SearchQuery, ViewSearchQueryView) {
	'use strict';
	
	var View = Backbone.View.extend({
		tagName: 'li',
		className: 'task',
		
	    initialize: function() {
			this.model.on('change:completed', this.render, this);
			this.model.on('destroy', this.remove, this);
			this.$el.hide();
		},
		
		render: function() {
			this.view();
			this.$el.fadeIn();
			return this;
		},
		
		view: function() {
			this.child = new ViewSearchQueryView({
				model: this.model
			});
			this.$el.html( this.child.render().el );
		}
	});

	return View;
});