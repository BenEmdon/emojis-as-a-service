
const emotions  = require('../config/emotions');
const gm = require('gm').subClass({imageMagick: true});
const async     = require('async');
const _         = require('underscore');



function getAllEmojis(data, callback) {
  const people = data["people"];
  async.each(people, function(person, cb) {
    let emotion = getEmotion(person["emotions"]);

    scaleImage(emotions[emotion].url, person, cb);
  }, callback);

}

function getEmotion(emotions) {
  return mapObject(emotions);
}

function mapObject(emotions){
  const valid_emotions = {};

  for( emotion in emotions){

     if(emotions[emotion] > 50){
       valid_emotions[emotion] = emotions[emotion];
     }
  }

  return analyseEmotions(valid_emotions);
}

function analyseEmotions(emotions){

  if(_.size(emotions) == 0){

    return "neutral";
  }else if (_.size(emotions) == 1) {

    for( emotion in emotions){
      return emotion;
    }

  }else{
    const largest =  Object.keys(emotions).reduce(function(a, b){ return emotions[a] > emotions[b] ? a : b });

    if(cheeky(emotions)){
      return "cheeky";
    }else if (contempt(emotions)){
      return "contempt";
    }else if (disappointment(emotions)) {
      return "disappointment";
    }else if (remorse(emotions)) {
      return "remorse";
    }else if (pride(emotions)) {
      return "pride";
    }else{
      return largest;
    }

  }
}

function validEmotion (emotion1, emotion2) {
  if(emotion1 && emotion2){
    return true;
  }else{
    return false;
  }
}

function cheeky(emotions) {
  return validEmotion(emotions["joy"], emotions["surprise"])
}

function contempt(emotions) {
  return validEmotion(emotions["disgust"], emotions["anger"]);
}

function disappointment(emotions) {
  return validEmotion(emotions["surprise"], emotions["sadness"])
}

function remorse(emotions) {
  return validEmotion(emotions["sadness", emotions["disgust"]])
}

function pride(emotions) {
  return validEmotion(emotions["anger"], emotions["joy"])
}

function scaleImage(image, person, callback) {
  let buffer;
  gm(image)
    .resize(person["face"]["height"], person["face"]["width"])
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
