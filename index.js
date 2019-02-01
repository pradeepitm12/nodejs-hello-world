var http = require('http');

var server = http.createServer(function(request, response) {
var msg   = process.env.APP_MSG;

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello "+msg);

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
