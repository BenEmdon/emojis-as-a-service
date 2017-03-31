const dotenv = require('dotenv');
const express = require('express');
const app = express();
const api = require('./ApiRequest.js');
const path = require('path');
// const multer  = require('multer');
// const upload = multer({dest: __dirname + '/public_html/images/'});
console.log("const multer = require('multer')"); 
const multer = require('multer')
console.log("const storage = multer.diskStorage"); 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/public_html/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
console.log("const upload = multer({storage: storage})"); 
const upload = multer({storage: storage})

const imageURL = 'https://emojis-as-a-service.herokuapp.com/images/'

dotenv.config({ silent: true });

const ROOT = "./public_html";

app.use(function(req,res,next){
	console.log(req.method + " request for " + req.url);
	next();
});

app.post("/upload", upload.single('pic'), function(req, res) {
	console.log(req.file);
	api(imageURL + req.file.filename)
	.then((imageData) => {
		console.log(imageData);
		res.send(imageData);
	})
	.catch((error) => {
		console.log(error);
		res.send(error);
	});
});

app.use(express.static(ROOT));  //handle all static requests

app.all("*",function(req, res) {
	res.sendStatus(404);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
