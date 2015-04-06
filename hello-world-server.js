//include the HTTP module
var http = require('http');

//create a web server, with a 
http.createServer(function (req, res) {
	res.writeHead(200);
  	res.end('Hello from Node.js!');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');