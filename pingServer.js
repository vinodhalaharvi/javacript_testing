var http = require('http');
var url = require( "url" );
var queryString = require( "querystring" );

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// accept POST request on the homepage
app.post('/ping', function (req, res) {
  res.send('Got a POST request');
});

http.createServer(function (req, res) {
    var theUrl = url.parse( req.url );
    var queryObj = queryString.parse( theUrl.query);
    var obj = JSON.parse( queryObj.jsonData);
    console.log(obj.servers);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');
