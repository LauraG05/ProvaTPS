let http = require ("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':"Text/plain"}
    );
    response.end("Hello world\n");
}).listen(8081);
console.log("Server running on port 8081");