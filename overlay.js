const fs = require('fs');
const gm = require('gm');

// Fake data to test (2 face_data currently)
var data = {
    "id": "b8a2e96fe6478b2c158a2f75",
    "media_info": {
        "length": 0,
        "width": 300,
        "height": 168,
        "type": "image",
        "file": "b8a2e96fe6478b2c158a2f75.jpg",
        "mime_type": "image/jpg"
    },
    "frames": [
        {
            "time": 0,
            "people": [
                {
                    "person_id": "0",
                    "demographics": {
                        "age_group": "Young Adult",
                        "gender": "Male"
                    },
                    "appearance": {
                        "glasses": "No"
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
                                "x": 165,
                                "y": 46
                            }
                        },
                        {
                            "leftEyeBrowInnerLeft": {
                                "x": 169,
                                "y": 42
                            }
                        },
                        {
                            "leftEyeBrowInnerRight": {
                                "x": 174,
                                "y": 42
                            }
                        },
                        {
                            "leftEyeBrowOuterRight": {
                                "x": 180,
                                "y": 43
                            }
                        },
                        {
                            "righteEyeBrowOuterLeft": {
                                "x": 185,
                                "y": 40
                            }
                        },
                        {
                            "rightEyeBrowInnerLeft": {
                                "x": 193,
                                "y": 37
                            }
                        },
                        {
                            "rightEyeBrowInnerRight": {
                                "x": 202,
                                "y": 35
                            }
                        },
                        {
                            "rightEyeBrowOuterRight": {
                                "x": 211,
                                "y": 39
                            }
                        },
                        {
                            "noseBetweenEyes": {
                                "x": 184,
                                "y": 52
                            }
                        },
                        {
                            "noseBridge": {
                                "x": 183,
                                "y": 56
                            }
                        },
                        {
                            "noseBody": {
                                "x": 182,
                                "y": 61
                            }
                        },
                        {
                            "noseTipTop": {
                                "x": 181,
                                "y": 65
                            }
                        },
                        {
                            "leftNostrilOuterLeft": {
                                "x": 180,
                                "y": 74
                            }
                        },
                        {
                            "leftNostrilOuterRight": {
                                "x": 184,
                                "y": 75
                            }
                        },
                        {
                            "noseTipBottom": {
                                "x": 186,
                                "y": 75
                            }
                        },
                        {
                            "rightNostrilInnerLeft": {
                                "x": 189,
                                "y": 74
                            }
                        },
                        {
                            "rightNostrilOuterRight": {
                                "x": 193,
                                "y": 73
                            }
                        },
                        {
                            "leftEyeCornerLeft": {
                                "x": 173,
                                "y": 56
                            }
                        },
                        {
                            "leftEyeTopInnerLeft": {
                                "x": 174,
                                "y": 52
                            }
                        },
                        {
                            "leftEyeTopInnerRight": {
                                "x": 179,
                                "y": 51
                            }
                        },
                        {
                            "leftEyeCornerRight": {
                                "x": 183,
                                "y": 54
                            }
                        },
                        {
                            "leftEyeBottomInnerRight": {
                                "x": 179,
                                "y": 56
                            }
                        },
                        {
                            "leftEyeBottomInnerLeft": {
                                "x": 175,
                                "y": 56
                            }
                        },
                        {
                            "rightEyeCornerLeft": {
                                "x": 193,
                                "y": 52
                            }
                        },
                        {
                            "rightEyeTopInnerLeft": {
                                "x": 198,
                                "y": 47
                            }
                        },
                        {
                            "rightEyeTopInnerRight": {
                                "x": 203,
                                "y": 47
                            }
                        },
                        {
                            "rightEyeCornerRight": {
                                "x": 209,
                                "y": 50
                            }
                        },
                        {
                            "rightEyeBottomInnerRight": {
                                "x": 204,
                                "y": 51
                            }
                        },
                        {
                            "rightEyeBottomInnerLeft": {
                                "x": 199,
                                "y": 52
                            }
                        },
                        {
                            "upperLipTopCornerLeft": {
                                "x": 181,
                                "y": 91
                            }
                        },
                        {
                            "upperLipTopOuterLeft": {
                                "x": 181,
                                "y": 86
                            }
                        },
                        {
                            "upperLipTopInnerLeft": {
                                "x": 184,
                                "y": 82
                            }
                        },
                        {
                            "upperLipTopCenter": {
                                "x": 188,
                                "y": 83
                            }
                        },
                        {
                            "upperLipTopInnerRight": {
                                "x": 193,
                                "y": 81
                            }
                        },
                        {
                            "upperLipTopOuterRight": {
                                "x": 201,
                                "y": 83
                            }
                        },
                        {
                            "upperLipTopCornerRight": {
                                "x": 209,
                                "y": 87
                            }
                        },
                        {
                            "lowerLipBottomCornerRight": {
                                "x": 202,
                                "y": 97
                            }
                        },
                        {
                            "lowerLipBottomInnerRight": {
                                "x": 196,
                                "y": 101
                            }
                        },
                        {
                            "lowerLipBottomCenter": {
                                "x": 191,
                                "y": 102
                            }
                        },
                        {
                            "lowerLipBottomInnerLeft": {
                                "x": 187,
                                "y": 101
                            }
                        },
                        {
                            "lowerLipBottomCornerLeft": {
                                "x": 184,
                                "y": 97
                            }
                        },
                        {
                            "upperLipBottomOuterLeft": {
                                "x": 184,
                                "y": 91
                            }
                        },
                        {
                            "upperLipBottomInnerLeft": {
                                "x": 186,
                                "y": 88
                            }
                        },
                        {
                            "upperLipBottomCenter": {
                                "x": 189,
                                "y": 87
                            }
                        },
                        {
                            "uppeLipMBottomInnerRight": {
                                "x": 194,
                                "y": 87
                            }
                        },
                        {
                            "upperLipBottomOuterRight": {
                                "x": 205,
                                "y": 88
                            }
                        },
                        {
                            "lowerLipInnerRight": {
                                "x": 194,
                                "y": 94
                            }
                        },
                        {
                            "lowerLipTopInnerLeft": {
                                "x": 186,
                                "y": 95
                            }
                        }
                    ],
                    "pose": {
                        "yaw": 1.84199,
                        "pitch": 13.8085,
                        "roll": 179.72
                    },
                    "face": {
                        "x": 200,
                        "y": 200,
                        "width": 78,
                        "height": 98
                    },
                    "distance": 26.3059,
                    "buffer": 2
                },
                {
                    "person_id": "0",
                    "demographics": {
                        "age_group": "Young Adult",
                        "gender": "Male"
                    },
                    "appearance": {
                        "glasses": "No"
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
                                "x": 165,
                                "y": 46
                            }
                        },
                        {
                            "leftEyeBrowInnerLeft": {
                                "x": 169,
                                "y": 42
                            }
                        },
                        {
                            "leftEyeBrowInnerRight": {
                                "x": 174,
                                "y": 42
                            }
                        },
                        {
                            "leftEyeBrowOuterRight": {
                                "x": 180,
                                "y": 43
                            }
                        },
                        {
                            "righteEyeBrowOuterLeft": {
                                "x": 185,
                                "y": 40
                            }
                        },
                        {
                            "rightEyeBrowInnerLeft": {
                                "x": 193,
                                "y": 37
                            }
                        },
                        {
                            "rightEyeBrowInnerRight": {
                                "x": 202,
                                "y": 35
                            }
                        },
                        {
                            "rightEyeBrowOuterRight": {
                                "x": 211,
                                "y": 39
                            }
                        },
                        {
                            "noseBetweenEyes": {
                                "x": 184,
                                "y": 52
                            }
                        },
                        {
                            "noseBridge": {
                                "x": 183,
                                "y": 56
                            }
                        },
                        {
                            "noseBody": {
                                "x": 182,
                                "y": 61
                            }
                        },
                        {
                            "noseTipTop": {
                                "x": 181,
                                "y": 65
                            }
                        },
                        {
                            "leftNostrilOuterLeft": {
                                "x": 180,
                                "y": 74
                            }
                        },
                        {
                            "leftNostrilOuterRight": {
                                "x": 184,
                                "y": 75
                            }
                        },
                        {
                            "noseTipBottom": {
                                "x": 186,
                                "y": 75
                            }
                        },
                        {
                            "rightNostrilInnerLeft": {
                                "x": 189,
                                "y": 74
                            }
                        },
                        {
                            "rightNostrilOuterRight": {
                                "x": 193,
                                "y": 73
                            }
                        },
                        {
                            "leftEyeCornerLeft": {
                                "x": 173,
                                "y": 56
                            }
                        },
                        {
                            "leftEyeTopInnerLeft": {
                                "x": 174,
                                "y": 52
                            }
                        },
                        {
                            "leftEyeTopInnerRight": {
                                "x": 179,
                                "y": 51
                            }
                        },
                        {
                            "leftEyeCornerRight": {
                                "x": 183,
                                "y": 54
                            }
                        },
                        {
                            "leftEyeBottomInnerRight": {
                                "x": 179,
                                "y": 56
                            }
                        },
                        {
                            "leftEyeBottomInnerLeft": {
                                "x": 175,
                                "y": 56
                            }
                        },
                        {
                            "rightEyeCornerLeft": {
                                "x": 193,
                                "y": 52
                            }
                        },
                        {
                            "rightEyeTopInnerLeft": {
                                "x": 198,
                                "y": 47
                            }
                        },
                        {
                            "rightEyeTopInnerRight": {
                                "x": 203,
                                "y": 47
                            }
                        },
                        {
                            "rightEyeCornerRight": {
                                "x": 209,
                                "y": 50
                            }
                        },
                        {
                            "rightEyeBottomInnerRight": {
                                "x": 204,
                                "y": 51
                            }
                        },
                        {
                            "rightEyeBottomInnerLeft": {
                                "x": 199,
                                "y": 52
                            }
                        },
                        {
                            "upperLipTopCornerLeft": {
                                "x": 181,
                                "y": 91
                            }
                        },
                        {
                            "upperLipTopOuterLeft": {
                                "x": 181,
                                "y": 86
                            }
                        },
                        {
                            "upperLipTopInnerLeft": {
                                "x": 184,
                                "y": 82
                            }
                        },
                        {
                            "upperLipTopCenter": {
                                "x": 188,
                                "y": 83
                            }
                        },
                        {
                            "upperLipTopInnerRight": {
                                "x": 193,
                                "y": 81
                            }
                        },
                        {
                            "upperLipTopOuterRight": {
                                "x": 201,
                                "y": 83
                            }
                        },
                        {
                            "upperLipTopCornerRight": {
                                "x": 209,
                                "y": 87
                            }
                        },
                        {
                            "lowerLipBottomCornerRight": {
                                "x": 202,
                                "y": 97
                            }
                        },
                        {
                            "lowerLipBottomInnerRight": {
                                "x": 196,
                                "y": 101
                            }
                        },
                        {
                            "lowerLipBottomCenter": {
                                "x": 191,
                                "y": 102
                            }
                        },
                        {
                            "lowerLipBottomInnerLeft": {
                                "x": 187,
                                "y": 101
                            }
                        },
                        {
                            "lowerLipBottomCornerLeft": {
                                "x": 184,
                                "y": 97
                            }
                        },
                        {
                            "upperLipBottomOuterLeft": {
                                "x": 184,
                                "y": 91
                            }
                        },
                        {
                            "upperLipBottomInnerLeft": {
                                "x": 186,
                                "y": 88
                            }
                        },
                        {
                            "upperLipBottomCenter": {
                                "x": 189,
                                "y": 87
                            }
                        },
                        {
                            "uppeLipMBottomInnerRight": {
                                "x": 194,
                                "y": 87
                            }
                        },
                        {
                            "upperLipBottomOuterRight": {
                                "x": 205,
                                "y": 88
                            }
                        },
                        {
                            "lowerLipInnerRight": {
                                "x": 194,
                                "y": 94
                            }
                        },
                        {
                            "lowerLipTopInnerLeft": {
                                "x": 186,
                                "y": 95
                            }
                        }
                    ],
                    "pose": {
                        "yaw": 1.84199,
                        "pitch": 13.8085,
                        "roll": 179.72
                    },
                    "face": {
                        "x": 500,
                        "y": 800,
                        "width": 78,
                        "height": 98
                    },
                    "distance": 26.3059,
                    "buffer": 2
                }
            ]
        }
    ],
    "status_code": 4,
    "status_message": "Complete",
    "length": 0
}

function overlay(analysis_result, orig_photo_name)
{
	var arr = analysis_result.frames[0].people;
	var emoji_dir  = __dirname + '/asset/emoji_photo';
	var input_dir  = __dirname + '/asset/input_photo';
	var output_dir = __dirname + '/asset/output_photo';

	function delete_middlewares(index, photo_name)
	{
		for (index - 1; index >= 0; index--) {
			// Delete middlewares in output_photo directory
			if (index > 0) {
				fs.unlinkSync(output_dir + '/' + index + '_' + photo_name);				
			}
			fs.unlinkSync(emoji_dir + '/' + index + '_' + photo_name);
		}
	}

	function calculate_slope(left_eye, right_eye) {
		return (Math.atan((right_eye.y - left_eye.y) / (right_eye.x - left_eye.x)) * 180 / Math.PI);
	};

	function insert_emoji(index, photo_name)
	{
		var geom = "+" + arr[index].face.x + "+" + arr[index].face.y;
		var photo_dir = ((index == 0) ? input_dir + '/' : output_dir + '/' + index + '_');
		var photo_path  = photo_dir + photo_name;
		var output_path = output_dir;

		// Index is now for the next index
		index += 1;

		if (index === arr.length) {
			output_path += ('/' + photo_name);
		} else {
			output_path += ('/' + index + '_' + photo_name);
		}

		// #IGNORE for rotating the emoji
		// var face_data = arr[index];
		// var left_eye = face_data.landmarks[18].leftEyeTopInnerLeft;
		// var right_eye = face_data.landmarks[25].rightEyeTopInnerRight;
		// var angle = calculate_slope(left_eye, right_eye);
		// var emoji_buffer = face_data.buffer; 

		// // For non zero angle, the emoji needs to be rotated
		// if (angle != 0) {
		// 	// Read the emoji and rotate it by the angle
		// 	gm(destination + "emoji.png")
		// 		.rotate
		// }

		gm(photo_path)
			.composite(emoji_dir + '/' + indexed_photo_name)
			.geometry(geom)
			.write(output_path, function(err) {
				if (err) console.log("Fail to write an image to the output_photo directory " + index);
				if (index < arr.length) {
					emoji_buffer_to_emoji_photo(index, photo_name);
				} else {
					delete_middlewares(index, photo_name);
				}
			});
	}

	function emoji_buffer_to_emoji_photo(index, photo_name)
	{
		var emoji_buffer = arr[index].buffer;
		var emoji_path   = emoji_dir + '/' + index + '_' + photo_name;

		if (emoji_buffer) {
			// Convert the emoji_buff to a photo file to the destination
			fs.writeFile(emoji_path, emoji_buffer, "binary", insert_emoji(index, photo_name));
		} else {
			console.log("Emoji buffer does not exist for index : " + index);
		}
	}

	function run()
	{
		if (arr.length == 0) console.log("Given data seems curropted");
		emoji_buffer_to_emoji_photo(0, orig_photo_name);
	}

	run();
}