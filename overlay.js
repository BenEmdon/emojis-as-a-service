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

var arr = data.frames[0].people;
var orig_photo = __dirname + '/0_nick.jpg';
var orig_photo_name = 'nick.jpg';
// var destination = __dirname + '/asset/output_photo';

// Make a buffer for a sample emoji
gm(__dirname + '/test.png')
	.toBuffer('PNG' ,function (err, buffer) {
		if (err) console.log("fail to make a fake buffer");

		function insert_emoji(index, photo_name)
		{
			var geom = "+" + arr[index].face.x + "+" + arr[index].face.y;
			var emoji_buffer = arr[index].buffer;
			// Write buffer into the file

			gm(__dirname + '/' + index + '_' + photo_name)
				.composite(__dirname + '/test.png')
				.geometry(geom)
				.write(__dirname + '/' + (index + 1) + '_nick.jpg', function(err) {
					if (err) console.log("Fail to write an image to the output_photo directory " + index);
					if (index + 1 < arr.length) {
						index += 1;
						insert_emoji(index, photo_name);
					}
				});
		}

		insert_emoji(0, orig_photo_name);
	});

// function writing_buff_to_file(buff)
// {
// 	gm(buff, 'image.jpg')
// 		.write(__dirname + '/new.jpg', function (err) {
// 		  if (err) console.log(err);
// 		  console.log('Created an image from a Buffer!');
// 		});
// }

// function analyze_photo_format(orig_photo) {
// 	gm(orig_photo)
// 		// Get a image format
// 		.identify(function(err, data) {
// 			if (err) console.log("Failed to read an image");
// 			orig_photo_format = data.format;

// 			// Create a buffer for the original photo
// 			// store_photo_buff(orig_photo, data.format);
// 			process(index, orig_photo);
// 		});
// };

// // analyze_photo_f ormat(orig_photo);

// function multiple_faces_for_each()
// {
// 	arr.forEach(function(face_data, index) {
// 		console.log("index : " + index);
// 		var geom = "+" + face_data.face.x + "+" + face_data.face.y;
// 		console.log(geom);

// 		gm(__dirname + '/nick' + index + '.jpg')
// 			.composite(__dirname + '/test.png')
// 			.geometry(geom)
// 			.write(__dirname + '/nick' + index + 1 + '.jpg', function(err) {
// 				if (err) {
// 					console.log("Fail to write an image to the output_photo directory");
// 					console.log(err);
// 				}
// 			});
// 	}
// }

// // // Make a buffer for a sample emoji
// // gm(work_directory + 'test.png')
// // 	.toBuffer('PNG' ,function (err, buffer) {
// // 		if (err) return handle(err);
// // 		emoji_buff = buffer;
// // 	})

// // gm(work_directory + '/test.png')
// // 	.identify(function(err, data) {
// // 		if (err) console.log("Failed to read an image");
// // 		photo_info = data;
// // 		console.log(data);
// // 	});

// // function InsertEmoji(analysis_result, orig_photo) {
// // 	var orig_photo_format, orig_photo_buff;
// // 	var people_arr = analysis_result.frames[0].people;
// // 	var destination = work_directory + "/asset/output_photo/";

// // 	function calculate_slope(left_eye, right_eye) {
// // 		angle = Math.atan((right_eye.y - left_eye.y) / (right_eye.x - left_eye.x)) * 180 / Math.PI;
// // 		return -1 * angle;
// // 	};

// // 	function store_photo_buff(orig_photo) {
// // 		gm(orig_photo)
// // 			// Create a buffer for the original photo
// // 			.toBuffer('', function(err, buffer) {
// // 				if (err) return handle(err);
// // 				orig_photo_buff = buffer;
// // 			});
// // 	};

// // 	function analyze_photo_format(orig_photo) {
// // 		gm(orig_photo)
// // 			// Get a image format
// // 			.identify(function(err, data) {
// // 				if (err) console.log("Failed to read an image");
// // 				orig_photo_format = data.format;

// // 				// Create a buffer for the original photo
// // 				store_photo_buff(orig_photo);
// // 			});
// // 	};

// // 	analyze_photo_format();
	
// // 	people_arr.forEach(function(face_data) {
// // 		var left_eye = face_data.landmarks[18].leftEyeTopInnerLeft;
// // 		var right_eye = face_data.landmarks[25].rightEyeTopInnerRight;
// // 		var angle = calculate_slope(left_eye, right_eye);
// // 		var emoji_buffer = face_data.buffer; 

// // 		// Convert the emoji_buff to a photo file to the destination
// // 		fs.writeFile(destination + "emoji.png", emoji_buffer, "binary", function() {});

// // 		// // For non zero angle, the emoji needs to be rotated
// // 		// if (angle != 0) {
// // 		// 	// Read the emoji and rotate it by the angle
// // 		// 	gm(destination + "emoji.png")
// // 		// 		.rotate
// // 		// }

// // 		// Insert the emoji onto the original_photo_buffer
// // 		gm(orig_photo_buff, )
// // 	}
// // });
	
// // 	gm(work_directory + "/asset/user_photo/nick.png")
// // 		// Unncessary, but gives information about the photo including format, size, RGB data
// // 		.identify(function(err, data) {
// // 			if (err) console.log("Failed to read an image");
// // 			photo_info = data;
// // 			console.log("The format is : " + photo_info.format);
// // 		})

// // 		// Convert the emoji_buff to a photo file to the destination
// // 		fs.writeFile(destination + "emoji.png", buffer, "binary", function() {});
		

// // 		// Draw the emoji on top of the original photo
// // 		.composite(emoji_buff)
// // 		.geometry('+541+679')

// // 		// Saving the result photo to the destination
// // 		.write(work_directory + '/asset/output_photo/' + photo_name, function(err) {
// // 			if (err) console.log("Fail to write an image to the output_photo directory");
// // 		});
// // }
