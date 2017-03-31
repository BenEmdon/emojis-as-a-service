const express = require('express');
const app = express();
var path = require('path');

app.listen(2017,function(){
	console.log('Server listening on port 2017');
});

app.post("/upload", (req, res) => {
	
	console.log("Image request");
});

app.get('/', (req, res) => {

	var options = {
	    root: __dirname + '/public_html/',
	    dotfiles: 'deny',
	    headers: {
	        'x-timestamp': Date.now(),
	        'x-sent': true
	    }
	  };
	//res.send({'nice': 'meme'});
	res.sendFile("index.html", options, function(err) {
		if (err) {
	      console.log("Error");
	    }
	});
});