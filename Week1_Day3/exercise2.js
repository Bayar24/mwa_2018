let http = require("http");
let fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
	fs.readFile('Week1_Day3/aa.jpg', function(err, img){
		if(err==null)
			res.end(img);
		else
			console.log(err);
	});
}).listen(1111, '127.0.0.1'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
	let img = fs.readFileSync('Week1_Day3/aa.jpg');
	res.end(img);
}).listen(1112, '127.0.0.1');

http.createServer(function (req, res) {
    fs.createReadStream("Week1_Day3/aa.jpg").pipe(res);
}).listen(1113, '127.0.0.1'); 