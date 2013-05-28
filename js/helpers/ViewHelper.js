define(function () {
	'use strict';
	
	return {
		formatItem: function (count) {
			return (count === 1) ? "item" : "items";
		},
		delay: 100
	};
});