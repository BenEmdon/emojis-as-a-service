var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});


fs.writeFileSync(__dirname + 'crazy.jpg', imagemagick.convert({
	srcData: fs.readFileSync(__dirname + 'test.png'),
	rotate: 45,
	flip: false
}));

// gm(__dirname + '/test.png')
// 	.rotate('white', 45)
// 	.write(__dirname + '/crazy.jpg', function (err) {
// 		if (!err) console.log('crazytown has arrived');
// 	});



console.log(__dirname + '/crazy.jpg')
gm(__dirname + '/asset/user_photo/nick.png')
	.composite(__dirname + '/crazy.jpg')
	.geometry('+5+5')
	.write(__dirname + '/combined.jpg', function(err) {
		if (err) console.log("Fail to write an image to the output_photo directory");
		console.log(err);
	});
