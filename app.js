const express = require('express');
const app = express();
var path = require('path');

const ROOT = "./public_html";

app.use(function(req,res,next){
	console.log(req.method+" request for "+req.url);
	next();
});

app.post("/upload", function(req, res) {
	console.log(req.file);
    res.send('Image back with emoji')
});

app.use(express.static(ROOT));  //handle all static requests

app.all("*",function(req,res){
	res.sendStatus(404);
});

app.listen(2017,function(){console.log("Express server listening on port 2017");});
