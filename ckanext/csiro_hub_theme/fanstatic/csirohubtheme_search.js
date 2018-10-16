"use strict";

var searchKn = function(eventName) {
};


ckan.module('csirohubtheme_search_kn', function ($) {
    return {
        initialize: function () {
            var query = this.options.query;
            var params = {
               q: query
            }
	    $.getJSON( "https://es.knowledgenet.co/datasets32/_search", params, function( data ) {
                console.log(data);
                var num_hits = data.hits.total;
                if(num_hits && num_hits > 0) {
                   $('.search-alternate-options-list').prepend("<li class='search-result-alt-item kn-search-result-hits'>Search the CSIRO Knowledge Network: <a href='http://knowledgenet.co/search/" + query + "'>" + num_hits + " datasets found</a>.</li>");
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

            var url = 'https://ws.data.csiro.au/collections.json';
            var query = this.options.query;
            var params = {
               q: query
            }
            $.getJSON( url, params, function( data ) {
                console.log(data);
                var num_hits = data.totalResults;
                if(num_hits && num_hits > 0) {
                   $('.search-alternate-options-list').prepend("<li class='search-result-alt-item dap-search-result-hits'>Search the CSIRO Data Access Portal (DAP): <a href='https://data.csiro.au/dap/search?q=" + query + "'>" +  num_hits  +  " datasets found</a>.</li>");
                }
            });


        }
    };
});
