define([
	'backbone',
	'views/NewSearchQueryView',
	'views/SearchQueryCollectionView'
	],
function(Backbone, NewSearchQueryView, SearchQueryCollectionView) {
	'use strict';
	
	var View = Backbone.View.extend({
		className: 'masterView',
		
		initialize: function() {
			/*
			This seems a bit like Apache Tiles to me.
			We are creating a master view and attaching to it 
			various child views.
			*/
			this.children = {
				newSearchQuery : new NewSearchQueryView({
					collection: this.collection
				}),
					
				searchQueryView: new SearchQueryCollectionView({
					collection: this.collection
				})
			};
		
			/*
			Now we hide the '.masterView' element before
			appending all the child views.
			*/
			this.$el.hide();
			this.$el.append(this.children.newSearchQuery.render().el);
			this.$el.append(this.children.searchQueryView.render().el);
		},
		
		render: function() {
			this.$el.show();
			return this;
		}
	});

	return View;
});
	