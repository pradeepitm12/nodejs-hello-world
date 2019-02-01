var http = require('http');

var server = http.createServer(function(request, response) {
var msg   = process.env.APP_MSG;
var user  = process.env.USER;
var pass  = process.env.PASS;

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello "+msg +" User Name = "+user + " password = "+pass);

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
