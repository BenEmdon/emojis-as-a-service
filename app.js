const dotenv = require('dotenv');
const express = require('express');
const app = express();
const api = require('./ApiRequest');
const actions = require('./utils/actions');
const bodyParser = require('body-parser');
const overlay = require('./utils/overlay');
const imageURL = 'https://emojis-as-a-service.herokuapp.com/images/'
dotenv.config({
    silent: true
});
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
const ROOT = "./public_html";
app.use(function (req, res, next) {
    console.log(req.method + " request for " + req.url);
    next();
});
app.use(bodyParser.json());

function processAPIData(res, data, filename) {
    if (data.status_code === undefined) {
        res.send(data);
    } else if (data.status_code === 4 && data.frames) {
        actions.getAllEmojis(data.frames[0], () => {
            overlay(data.frames[0], filename, () => {
                res.json({
                    'url': imageURL + filename
                });
            });
        })
    } else if (data.status_code) {
      setTimeout(() => {
        api.get(data.id)
        .then((newData) => {
          processAPIData(res, newData, filename)
        })
        .catch((error) => {
            res.send(error);
        });
      }, 500);
    } else {
        // this is purely a safety net
    }
}

app.post('/upload', function (req, res) {
    // create an incoming form object
    var form = new formidable.IncomingForm();
    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;
    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/uploads');
    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function (field, file) {
        fs.rename(file.path, file.path + path.extname(file.name), function (err) {
            if (err) return res.send(err);
            file.path = file.path + path.extname(file.name);
            file.name = path.basename(file.path);
            
            api.post(imageURL + file.name).then((data) => {
                processAPIData(res, data, file.name);
            }).catch((error) => {
                res.send(error);
            });
        });
    });

    // log any errors that occur
    form.on('error', function (err) {
        console.log('An error has occured: \n' + err);
    });
    // once all the files have been uploaded, send a response to the client
    form.on('end', function () {
        // res.end('success');
    });
    // parse the incoming request containing the form data
    form.parse(req);
});
app.post('/slack', function (req, res) {
   console.log(req.body.image_url);
    path.extname(req.body.image_url)
 var name = './uploads' + Date.now() + path.extname(req.body.image_url); 
    request(req.body.image_url, {encoding: 'binary'}, function(error, response, body) {
        fs.writeFile(name, body, 'binary', function (err) {});
        api.post(name).then((data) => {
            console.log(name);
                processAPIData(res, data, name);
            }).catch((error) => {
                console.log(error);
                res.send(error);
            });
    });
});
app.use('/images', express.static('./uploads'));
app.use(express.static(ROOT)); //handle all static requests
app.all("*", function (req, res) {
    res.sendStatus(404);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
})
