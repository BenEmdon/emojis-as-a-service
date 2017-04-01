const dotenv = require('dotenv');
const express = require('express');
const app = express();
const api = require('./ApiRequest');
const actions = require('./utils/actions');
const bodyParser = require('body-parser');
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

function processAPIData(res, data) {
    if (!data.status_code) {
        console.log(data);
        res.send(data);
    }
    if (data.status_code === 4 && data.frames) {
        actions.getAllEmojis(data.frames[0], () => {
            console.log(`EMOJI: ${data.frames[0]}`);
        })
    } else if (data.status_code === 2) {
      setTimeout(() => {
        api.get(data.id, (newData) => {
          processAPIData(res, newData)
        });
      }, 500);
    } else {
        console.log(data);
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
            res.send(imageURL + file.name);
            api.post(imageURL + file.name).then((data) => {
              processAPIData(res, data);
            }).catch((error) => {
                console.log(error);
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
    api.post(req.body.image_url).then((imageData) => {
        /*actions.getAllEmojis(imageData.frames[0], () => {
        res.sendFilexfile.path);
      })*/
        res.json({
            url: 'http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg'
        });
    }).catch((error) => {
        console.log(error);
        res.send(error);
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
