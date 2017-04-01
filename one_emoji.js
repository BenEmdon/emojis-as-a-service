var fs = require('fs');
var gm = require('gm');

var work_directory = __dirname;

function InsertEmoji(analysis_result, orig_photo) {
	var orig_photo_format, orig_photo_buff;
	var people_arr = analysis_result.frames[0].people;
	var destination = work_directory + "/asset/output_photo";

	function calculate_slope(left_eye, right_eye) {
		angle = Math.atan((right_eye.y - left_eye.y) / (right_eye.x - left_eye.x)) * 180 / Math.PI;
		return angle;
	};

	function store_photo_buff(orig_photo) {
		gm(orig_photo)
			// Create a buffer for the original photo
			.toBuffer('', function(err, buffer) {
				if (err) return handle(err);
				orig_photo_buff = buffer;
			});
	};

	function analyze_photo_format(orig_photo) {
		gm(orig_photo)
			// Get a image format
			.identify(function(err, data) {
				if (err) console.log("Failed to read an image");
				orig_photo_format = data.format;

				// Create a buffer for the original photo
				store_photo_buff(orig_photo);
			});
	};

	// analyze_photo_format();
	
	people_arr.forEach(function(face_data) {
		var left_eye = face_data.landmarks[18].leftEyeTopInnerLeft;
		var right_eye = face_data.landmarks[25].rightEyeTopInnerRight;
		var angle = calculate_slope(left_eye, right_eye);
		var emoji_buffer = face_data.buffer; 
		var geom = "+" + face_data.face.x + "+" + face_data.face.y;

		// Convert the emoji_buffer to a photo file to the destination
		fs.writeFile(work_directory + "/asset/emoji_photo/" + orig_photo + "_emoji.png", emoji_buffer, "binary", function() {});
		gm(work_directory + "/asset/input_photo/" + orig_photo)
			// Unncessary, but gives information about the photo including format, size, RGB data
			.identify(function(err, data) {
				if (err) console.log("Failed to read an image");
				photo_info = data;
				console.log("The format is : " + photo_info.format);
			})
			
			// Draw the emoji on top of the original photo
			.composite(work_directory + "/asset/emoji_photo/" + orig_photo + "_emoji.png")
			.geometry(geom)

			// Saving the result photo to the destination
			.write(work_directory + destination + '/' + orig_photo, function(err) {
				if (err) console.log("Fail to write an image to the output_photo directory");
			});

			// ******* Still in progress for rotating the emoji *******
		// // For non zero angle, the emoji needs to be rotated
		// if (angle != 0) {
		// 	// Read the emoji and rotate it by the angle
		// 	gm(destination + "emoji.png")
		// 		.rotate
		// }
		// Insert the emoji onto the original_photo_buffer
	})
};