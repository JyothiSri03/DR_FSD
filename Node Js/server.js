var http= require('http');
http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.end('server is connected.');
}).listen(8080);
console.log("server started...running on localhost:8080");