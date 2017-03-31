const emotions = require('../config/emotions');
const gm = require('gm').subClass({imageMagick: true});
const async = require('async');
const fs = require('fs');

function getAllEmojis(data, callback) {
  const people = data["people"];
  async.each(people, function(person, cb) {
    let emotion = getEmotion(person["emotions"]);
    scaleImage(emotions[emotion].url, person, cb);
  }, callback);
}

function getEmotion(emotions) {
  return Object.keys(emotions).reduce(function(a, b){ return emotions[a] > emotions[b] ? a : b });
}

function scaleImage(image, person, callback) {
  gm(image)
    .resize(person["face"]["width"], person["face"]["height"], "!") // ! used to prevent maintaining of aspect ratio
    .toBuffer('PNG', function(err, buffer) {
      if (err) return callback(err);
      person.emojiBuffer = buffer;
      callback();
    });
}

const test_data = {
  "people": [
    {
      "emotions": {
        "anger": 4,
        "disgust": 0.068,
        "fear": 2,
        "joy": 1.006,
        "sadness": 0,
        "surprise": 2
      },
      "face": {
        "height": 248,
        "width": 248,
        "x": 298,
        "y": 126
      },
      "pose": {
        "pitch": 0.900874,
        "roll": -2.14441,
        "yaw": -11.3128
      },
    },
    {
      "emotions": {
        "anger": 4,
        "disgust": 0.068,
        "fear": 2,
        "joy": 1.006,
        "sadness": 0,
        "surprise": 2
      },
      "face": {
        "height": 500,
        "width": 500,
        "x": 298,
        "y": 126
      },
      "pose": {
        "pitch": 0.900874,
        "roll": -2.14441,
        "yaw": -11.3128
      },
    }

  ],
  "time": 83
}

getAllEmojis(test_data, function() {
  console.log(test_data);
});

module.exports = {
  getAllEmojis
};
