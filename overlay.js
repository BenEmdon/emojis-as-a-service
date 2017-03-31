console.log("Testing GraphicsMagick");
console.log("\tcurrent directory : " + __dirname);

var fs = require('fs');
var gm = require('gm');
var readline = require('readline');

var work_directory = __dirname;
var photo_name = 'nick.jpg';
var photo_name_no_format = photo_name.substring(photo_name.indexOf("."));
var photo_path = work_directory + photo_name;

var photo_info;

// gm('img.jpg')
// .resize(100, 100)
// .toBuffer('PNG',function (err, buffer) {
//   if (err) return handle(err);
//   console.log('done!');
// })

gm(work_directory + '/asset/user_photo/nick.png')
	// Unncessary, but gives information about the photo including format, size, RGB data
	.identify(function(err, data) {
		if (err) console.log("Failed to read an image");
		photo_info = data;
		console.log("The format is : " + photo_info.format);
	})
	// Get size information
	.size(function (err, size) {
		if (!err) {
			console.log("size.width : " + size.width + " && size.height : " + size.height);
			console.log(size.width > size.height ? 'wider' : 'taller than you');
		} else {
			console.log("something went wrong");
			console.log(err);
		}
	})
//	.resizeExact(800, 600)
	.composite(work_directory + '/asset/emoji_photo/emoji_example.png')
//	.geometry('+390+706')
	.geometry('+390+706')
	.write(work_directory + '/asset/output_photo/' + photo_name, function(err) {
		if (err) console.log("Fail to write an image to the output_photo directory");
	});

;
//	.resizeExact());
