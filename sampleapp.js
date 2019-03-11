var http = require("http");
var port = 8000;
http.createServer(function(request,response){
    response.writeHead(200,{'content-type': 'text/plain'});
    response.end("Azure Devops");
}).listen(port);
console.log("Server running ");