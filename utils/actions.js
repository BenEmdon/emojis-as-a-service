const _         = require('underscore');
const emotions = require('../config/emotions');
const gm = require('gm').subClass({imageMagick: true});
const async = require('async');
const fs = require('fs');

function getAllEmojis(data, callback) {
  const people = data["people"];
  async.each(people, function(person, cb) {
    let emotion = person.hasOwnProperty("emotions") ? getEmotion(person["emotions"]) : "joy";
    console.log(emotion)
    scaleImage(emotions[emotion].url, person, cb);
  }, callback);
}

function getEmotion(emotions) {
  return mapObject(emotions);
}

function mapObject(emotions){
  const valid_emotions = {};

  for( emotion in emotions){

     if(emotions[emotion] >= 50){
       valid_emotions[emotion] = emotions[emotion];
     }
  }

  return analyseEmotions(valid_emotions);
}

function analyseEmotions(emotions){
  if (emotions === undefined) return;

  if(emotions.length === 0){
    return "neutral";
  }else if (emotions.length === 1) {
    return emotions[0];
  }else{
    const largest = Object.keys(emotions).reduce(function(a, b){ return emotions[a] > emotions[b] ? a : b });

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
  return emotion1 && emotion2;
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
  return validEmotion(emotions["surprise"], emotions["joy"])
}

function scaleImage(image, person, callback) {
  gm(image)
    .resize(person["face"]["width"], person["face"]["height"], "!") // ! used to prevent maintaining of aspect ratio
    .toBuffer('PNG', function(err, buffer) {
      if (err) return callback(err);
      person.emojiBuffer = buffer;
			fs.writeFile("test.png", buffer, "binary", function() {});
      callback();
    });
}

const test_data = {
	"people": [
                {
                    "person_id": "0",
                    "demographics": {
                        "age_group": "Young Adult",
                        "gender": "Male"
                    },
                    "appearance": {
                        "glasses": "Yes"
                    },
                    "emotions": {
                        "anger": 0,
                        "disgust": 0,
                        "fear": 0,
                        "joy": 0,
                        "sadness": 0,
                        "surprise": 0
                    },
                    "tracking": {
                        "glances": 1,
                        "dwell": 0,
                        "attention": 100,
                        "blink": "No"
                    },
                    "landmarks": [
                        {
                            "leftEyeBrowOuterLeft": {
                                "x": 623,
                              "y": 766}
                            },

                        {
                            "leftEyeBrowInnerLeft": {
                                "x": 639,
                                "y": 766
                            }
                        },
                        {
                            "leftEyeBrowInnerRight": {
                                "x": 656,
                                "y": 771
                            }
                        },
                        {
                            "leftEyeBrowOuterRight": {
                                "x": 669,
                                "y": 783
                            }
                        },
                        {
                            "righteEyeBrowOuterLeft": {
                                "x": 688,
                                "y": 786
                            }
                        },
                        {
                            "rightEyeBrowInnerLeft": {
                                "x": 702,
                                "y": 780
                            }
                        },
                        {
                            "rightEyeBrowInnerRight": {
                                "x": 717,
                                "y": 781
                            }
                        },
                        {
                            "rightEyeBrowOuterRight": {
                                "x": 731,
                                "y": 788
                            }
                        },
                        {
                            "noseBetweenEyes": {
                                "x": 676,
                                "y": 813
                            }
                        },
                        {
                            "noseBridge": {
                                "x": 674,
                                "y": 831
                            }
                        },
                        {
                            "noseBody": {
                                "x": 670,
                                "y": 849
                            }
                        },
                        {
                            "noseTipTop": {
                                "x": 667,
                                "y": 867
                            }
                        },
                        {
                            "leftNostrilOuterLeft": {
                                "x": 644,
                                "y": 880
                            }
                        },
                        {
                            "leftNostrilOuterRight": {
                                "x": 653,
                                "y": 886
                            }
                        },
                        {
                            "noseTipBottom": {
                                "x": 663,
                                "y": 890
                            }
                        },
                        {
                            "rightNostrilInnerLeft": {
                                "x": 673,
                                "y": 890
                            }
                        },
                        {
                            "rightNostrilOuterRight": {
                                "x": 682,
                                "y": 887
                            }
                        },
                        {
                            "leftEyeCornerLeft": {
                                "x": 625,
                                "y": 805
                            }
                        },
                        {
                            "leftEyeTopInnerLeft": {
                                "x": 638,
                                "y": 807
                            }
                        },
                        {
                            "leftEyeTopInnerRight": {
                                "x": 648,
                                "y": 810
                            }
                        },
                        {
                            "leftEyeCornerRight": {
                                "x": 656,
                                "y": 812
                            }
                        },
                        {
                            "leftEyeBottomInnerRight": {
                                "x": 646,
                                "y": 812
                            }
                        },
                        {
                            "leftEyeBottomInnerLeft": {
                                "x": 635,
                                "y": 811
                            }
                        },
                        {
                            "rightEyeCornerLeft": {
                                "x": 698,
                                "y": 820
                            }
                        },
                        {
                            "rightEyeTopInnerLeft": {
                                "x": 709,
                                "y": 821
                            }
                        },
                        {
                            "rightEyeTopInnerRight": {
                                "x": 719,
                                "y": 824
                            }
                        },
                        {
                            "rightEyeCornerRight": {
                                "x": 726,
                                "y": 825
                            }
                        },
                        {
                            "rightEyeBottomInnerRight": {
                                "x": 717,
                                "y": 828
                            }
                        },
                        {
                            "rightEyeBottomInnerLeft": {
                                "x": 707,
                                "y": 825
                            }
                        },
                        {
                            "upperLipTopCornerLeft": {
                                "x": 624,
                                "y": 917
                            }
                        },
                        {
                            "upperLipTopOuterLeft": {
                                "x": 639,
                                "y": 914
                            }
                        },
                        {
                            "upperLipTopInnerLeft": {
                                "x": 651,
                                "y": 913
                            }
                        },
                        {
                            "upperLipTopCenter": {
                                "x": 657,
                                "y": 917
                            }
                        },
                        {
                            "upperLipTopInnerRight": {
                                "x": 665,
                                "y": 918
                            }
                        },
                        {
                            "upperLipTopOuterRight": {
                                "x": 677,
                                "y": 923
                            }
                        },
                        {
                            "upperLipTopCornerRight": {
                                "x": 688,
                                "y": 932
                            }
                        },
                        {
                            "lowerLipBottomCornerRight": {
                                "x": 672,
                                "y": 942
                            }
                        },
                        {
                            "lowerLipBottomInnerRight": {
                                "x": 659,
                                "y": 944
                            }
                        },
                        {
                            "lowerLipBottomCenter": {
                                "x": 651,
                                "y": 943
                            }
                        },
                        {
                            "lowerLipBottomInnerLeft": {
                                "x": 643,
                                "y": 939
                            }
                        },
                        {
                            "lowerLipBottomCornerLeft": {
                                "x": 634,
                                "y": 932
                            }
                        },
                        {
                            "upperLipBottomOuterLeft": {
                                "x": 631,
                                "y": 920
                            }
                        },
                        {
                            "upperLipBottomInnerLeft": {
                                "x": 648,
                                "y": 925
                            }
                        },
                        {
                            "upperLipBottomCenter": {
                                "x": 656,
                                "y": 927
                            }
                        },
                        {
                            "uppeLipMBottomInnerRight": {
                                "x": 661,
                                "y": 929
                            }
                        },
                        {
                            "upperLipBottomOuterRight": {
                                "x": 682,
                                "y": 933
                            }
                        },
                        {
                            "lowerLipInnerRight": {
                                "x": 661,
                                "y": 931
                            }
                        },
                        {
                            "lowerLipTopInnerLeft": {
                                "x": 647,
                                "y": 928
                            }
                        }
                    ],
                    "pose": {
                        "yaw": 3.18194,
                        "pitch": 5.20989,
                        "roll": -14.3188
                    },
                    "face": {
                        "x": 541,
                        "y": 679,
                        "width": 250,
                        "height": 337
                    },
                    "distance": 84.4038
                }
            ]
}

getAllEmojis(test_data, function() {
  console.log(test_data);
});

module.exports = {
  getAllEmojis
};
