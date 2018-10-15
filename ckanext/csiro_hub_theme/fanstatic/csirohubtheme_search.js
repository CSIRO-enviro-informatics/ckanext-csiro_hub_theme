"use strict";

var searchKn = function(eventName) {
};


ckan.module('csirohubtheme_search_kn', function ($) {
    return {
        initialize: function () {
            console.log("I've been initialized for element: ", this.el);
            console.log("this");
            console.log(this);
            console.log("this.options");
            console.log(this.options);

            var query = this.options.query;
            var params = {
               q: query
            }


	    $.getJSON( "https://es.knowledgenet.co/datasets32/_search", params, function( data ) {
                console.log(data);
                var num_hits = data.hits.total;
                if(num_hits && num_hits > 0) {
                   $('.kn-search-results').append("<div class='kn-search-result-hits'>" +num_hits + " datasets found at <a href='http://knowledgenet.co/search/" + query + "'>Knowledge Network</a></div>");
                }
	    });
        }
    };
});

ckan.module('csirohubtheme_search_dap', function ($) {
    return {
        initialize: function () {
            console.log("I've been initialized for element: ", this.el);
            console.log("this");
            console.log(this);
            console.log("this.options");
            console.log(this.options);
        }
    };
});
