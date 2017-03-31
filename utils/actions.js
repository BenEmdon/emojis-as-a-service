const emotions = require('../config/emotions');

function getAllEmojis(data) {
  const people = data["frames"][0]["people"];
  for (let person of people) {
    let emotion = getEmotion(person["emotions"]);
    person.emojiImage = scaleImage(emotions[emotion].url, person["face"]["height"], person["face"]["width"]);
    console.log(emotions[emotion].url);
  }
}

function getEmotion(emotions) {
  return Object.keys(emotions).reduce(function(a, b){ return emotions[a] > emotions[b] ? a : b });
}

function scaleImage(image, height, width) {

}

const test_data = {
  "frames": [
    {
      "people": [
        {
          "appearance": {
            "glasses": "No"
          },
          "demographics": {
            "age_group": "Young Adult",
            "gender": "Male"
          },
          "distance": 109.005,
          "emotions": {
            "anger": 4,
            "disgust": 0.068,
            "fear": 2,
            "joy": 1.006,
            "sadness": 0,
            "surprise": 2
          },
          "end_time": "2016-Aug-31 17:47:35.285368",
          "face": {
            "height": 248,
            "width": 248,
            "x": 298,
            "y": 126
          },
          "landmarks": [
            {
              "leftEyeBrowOuterLeft": {
                "x": 356,
                "y": 171
              }
            },
            {
              "leftEyeBrowInnerLeft": {
                "x": 373,
                "y": 167
              }
            },
            {
              "lowerLipTopInnerLeft": {
                "x": 400,
                  "y": 324
              }
            }
          ],
          "person_id": "0",
          "pose": {
            "pitch": 0.900874,
            "roll": -2.14441,
            "yaw": -11.3128
          },
          "start_time": "2016-Aug-31 17:47:35.280681",
          "tracking": {
            "attention": 100,
            "blink": "Yes",
            "dwell": 0.004,
            "glances": 1
          }
        }
      ],
      "time": 83
    }
  ],
  "id": "e873eebce0d77bd6fed3b1b9",
  "length": 12,
  "media_info": {
    "file": "e873eebce0d77bd6fed3b1b9.flv",
    "length": 12,
    "mime_type": "video/flv",
    "type": "video"
  },
  "status_code": 4,
  "status_message": "Complete"
};
getAllEmojis(test_data);

module.exports = {
  getAllEmojis
};
