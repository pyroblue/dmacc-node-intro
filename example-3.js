var express = require('express')
var request = require('request');
var _ = require('underscore'); //get rid of

var app = express();

//setup a route to listen to "/<searchterm>"...basically replicating a "$_GET"
app.get('/:searchterm', function (req, res) {
	//take whatever is after the slash and use it to query reddit...
	var url = 'http://api.giphy.com/v1/gifs/search?q='+req.params.searchterm+'&api_key=dc6zaTOxFJmzC';

	//request stuff from giphy
	request({url: url, json: true}, function(err, response, json) {
	    if (err) throw err;

	    var html = '';

	    //loop through each of the posts
	    _.each(json.data, function(post, i){
	    	var imgUrl = post.images.fixed_height.url;
	    	var rating = post.rating;
	    	//keep it clean
	    	if(rating != "r"){
		    	html += "<img src='" + imgUrl + "' />";		    		
		    }
	    });

	    //when we're done, complete the request and return the HTML
	    res.send(html);
	});
})


//start the application!
var server = app.listen(3000, function () {
  console.log('Example app listening at http://127.0.0.1:3000');
})