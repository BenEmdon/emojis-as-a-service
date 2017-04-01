const dotenv = require('dotenv');
const express = require('express');
const app = express();
const api = require('./ApiRequest');
const actions = require('./utils/actions');

const imageURL = 'https://emojis-as-a-service.herokuapp.com/images/'

dotenv.config({ silent: true });

var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

const ROOT = "./public_html";

app.use(function(req,res,next){
	console.log(req.method + " request for " + req.url);
	next();
});

// app.post("/upload", upload.single('pic'), function(req, res) {
// 	console.log(req.file);
// 	api(imageURL + req.file.filename)
// 	.then((imageData) => {
// 		console.log(imageData);
// 		res.send(imageData);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 		res.send(error);
// 	});
// });

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
		api(imageURL + file.name)
		.then((imageData) => {
			console.log(imageData);
      actions.getAllEmojis(imageData.frames[0], () => {
        res.send(imageData);
      })
		})
		.catch((error) => {
			console.log(error);
			res.send(error);
		});
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    // res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);
});

app.use('/images', express.static('./uploads'));

app.use(express.static(ROOT));  //handle all static requests

app.all("*",function(req, res) {
	res.sendStatus(404);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
})
