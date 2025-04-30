var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>This is NodeJs</h1></br>");
    res.write("This is Batch 250");
    res.end();
}).listen(8090);