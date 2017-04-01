const fs = require('fs');
const gm = require('gm');

// Fake data to test (2 face_data currently)
var data = {
    "id": "87ecbaa3ec25f0eb0782b3a4",
    "media_info": {
        "length": 0,
        "width": 720,
        "height": 960,
        "type": "image",
        "file": "87ecbaa3ec25f0eb0782b3a4.jpg",
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
                                "x": 285,
                                "y": 369
                            }
                        },
                        {
                            "leftEyeBrowInnerLeft": {
                                "x": 295,
                                "y": 368
                            }
                        },
                        {
                            "leftEyeBrowInnerRight": {
                                "x": 305,
                                "y": 369
                            }
                        },
                        {
                            "leftEyeBrowOuterRight": {
                                "x": 314,
                                "y": 374
                            }
                        },
                        {
                            "righteEyeBrowOuterLeft": {
                                "x": 323,
                                "y": 373
                            }
                        },
                        {
                            "rightEyeBrowInnerLeft": {
                                "x": 330,
                                "y": 372
                            }
                        },
                        {
                            "rightEyeBrowInnerRight": {
                                "x": 338,
                                "y": 372
                            }
                        },
                        {
                            "rightEyeBrowOuterRight": {
                                "x": 345,
                                "y": 375
                            }
                        },
                        {
                            "noseBetweenEyes": {
                                "x": 317,
                                "y": 379
                            }
                        },
                        {
                            "noseBridge": {
                                "x": 316,
                                "y": 385
                            }
                        },
                        {
                            "noseBody": {
                                "x": 314,
                                "y": 392
                            }
                        },
                        {
                            "noseTipTop": {
                                "x": 313,
                                "y": 399
                            }
                        },
                        {
                            "leftNostrilOuterLeft": {
                                "x": 304,
                                "y": 409
                            }
                        },
                        {
                            "leftNostrilOuterRight": {
                                "x": 308,
                                "y": 411
                            }
                        },
                        {
                            "noseTipBottom": {
                                "x": 312,
                                "y": 411
                            }
                        },
                        {
                            "rightNostrilInnerLeft": {
                                "x": 315,
                                "y": 411
                            }
                        },
                        {
                            "rightNostrilOuterRight": {
                                "x": 320,
                                "y": 411
                            }
                        },
                        {
                            "leftEyeCornerLeft": {
                                "x": 288,
                                "y": 378
                            }
                        },
                        {
                            "leftEyeTopInnerLeft": {
                                "x": 294,
                                "y": 375
                            }
                        },
                        {
                            "leftEyeTopInnerRight": {
                                "x": 301,
                                "y": 376
                            }
                        },
                        {
                            "leftEyeCornerRight": {
                                "x": 305,
                                "y": 382
                            }
                        },
                        {
                            "leftEyeBottomInnerRight": {
                                "x": 300,
                                "y": 382
                            }
                        },
                        {
                            "leftEyeBottomInnerLeft": {
                                "x": 294,
                                "y": 382
                            }
                        },
                        {
                            "rightEyeCornerLeft": {
                                "x": 326,
                                "y": 385
                            }
                        },
                        {
                            "rightEyeTopInnerLeft": {
                                "x": 331,
                                "y": 379
                            }
                        },
                        {
                            "rightEyeTopInnerRight": {
                                "x": 337,
                                "y": 380
                            }
                        },
                        {
                            "rightEyeCornerRight": {
                                "x": 341,
                                "y": 384
                            }
                        },
                        {
                            "rightEyeBottomInnerRight": {
                                "x": 337,
                                "y": 387
                            }
                        },
                        {
                            "rightEyeBottomInnerLeft": {
                                "x": 331,
                                "y": 386
                            }
                        },
                        {
                            "upperLipTopCornerLeft": {
                                "x": 295,
                                "y": 433
                            }
                        },
                        {
                            "upperLipTopOuterLeft": {
                                "x": 302,
                                "y": 428
                            }
                        },
                        {
                            "upperLipTopInnerLeft": {
                                "x": 309,
                                "y": 424
                            }
                        },
                        {
                            "upperLipTopCenter": {
                                "x": 312,
                                "y": 426
                            }
                        },
                        {
                            "upperLipTopInnerRight": {
                                "x": 315,
                                "y": 425
                            }
                        },
                        {
                            "upperLipTopOuterRight": {
                                "x": 319,
                                "y": 429
                            }
                        },
                        {
                            "upperLipTopCornerRight": {
                                "x": 322,
                                "y": 436
                            }
                        },
                        {
                            "lowerLipBottomCornerRight": {
                                "x": 317,
                                "y": 439
                            }
                        },
                        {
                            "lowerLipBottomInnerRight": {
                                "x": 313,
                                "y": 441
                            }
                        },
                        {
                            "lowerLipBottomCenter": {
                                "x": 310,
                                "y": 440
                            }
                        },
                        {
                            "lowerLipBottomInnerLeft": {
                                "x": 307,
                                "y": 440
                            }
                        },
                        {
                            "lowerLipBottomCornerLeft": {
                                "x": 301,
                                "y": 437
                            }
                        },
                        {
                            "upperLipBottomOuterLeft": {
                                "x": 299,
                                "y": 433
                            }
                        },
                        {
                            "upperLipBottomInnerLeft": {
                                "x": 308,
                                "y": 430
                            }
                        },
                        {
                            "upperLipBottomCenter": {
                                "x": 311,
                                "y": 430
                            }
                        },
                        {
                            "uppeLipMBottomInnerRight": {
                                "x": 314,
                                "y": 430
                            }
                        },
                        {
                            "upperLipBottomOuterRight": {
                                "x": 319,
                                "y": 435
                            }
                        },
                        {
                            "lowerLipInnerRight": {
                                "x": 314,
                                "y": 434
                            }
                        },
                        {
                            "lowerLipTopInnerLeft": {
                                "x": 308,
                                "y": 434
                            }
                        }
                    ],
                    "pose": {
                        "yaw": 26.7608,
                        "pitch": -14.2665,
                        "roll": -2.03929
                    },
                    "face": {
                        "x": 244,
                        "y": 313,
                        "width": 130,
                        "height": 164
                    },
                    "distance": 43.7379
                }
            ]
        }
    ],
    "status_code": 4,
    "status_message": "Complete",
    "length": 0
}

// ***** Testing with fake buffer *****
// Create a fake buffer and put them into the fake data
// var fake_buffer_work_dir = __dirname.substr(0, __dirname.lastIndexOf("/"));
// gm(fake_buffer_work_dir + '/test.png')
// 	.toBuffer('PNG' ,function (err, buffer) {
// 		if (err) return console.log("Error to make a fake buffer");
// 		var arr = data.frames[0].people;
// 		arr.forEach(function(face_data) {
// 			face_data.buffer = buffer;
// 		});

// 		overlay(data, 'nick.jpg');
// 	})

function overlay(analysis_result, orig_photo_name)
{
	var arr = analysis_result.frames[0].people;
    var work_dir = __dirname.substr(0, __dirname.lastIndexOf("/"));
	var emoji_dir  = work_dir + '/asset/emoji_photo';
	var input_dir  = work_dir + '/asset/input_photo';
	var output_dir = work_dir + '/asset/output_photo';

	function delete_middlewares(index, photo_name)
	{
		for (index -= 1; index >= 0; index--) {
			// Delete middlewares in output_photo directory
			if (index > 0) {
				fs.unlinkSync(output_dir + '/' + index + '_' + photo_name, function(err) {
					if (err) console.log("Error to delete a middleware in output_photo for index : " + index);
				});
			}
			fs.unlinkSync(emoji_dir + '/' + index + '_' + photo_name, function(err) {
				if (err) console.log("Error to delete a middleware in output_photo for index : " + index);
			});
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
		var indexed_photo_name = index + '_' + photo_name;

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

		console.log(output_path);

		gm(photo_path)
			.composite(emoji_dir + '/' + indexed_photo_name)
			.geometry(geom)
			.write(output_path, function(err) {
				if (err) {
					console.log("Fail to write an image to the output_photo directory " + index);
					console.log(err);
				}
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
			fs.writeFile(emoji_path, emoji_buffer, "binary", function(err) {
				if (err) console.log("Failed to write buffer to a file with index : " + index);
				if (!err) insert_emoji(index, photo_name)
			});
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